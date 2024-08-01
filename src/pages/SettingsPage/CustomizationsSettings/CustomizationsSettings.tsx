import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import CheckoutCustomizeForm from './_comp/CheckoutCustomizeForm';
import NewsletterConsentForm from './_comp/NewsletterConsentForm';
import OrderInvoiceCustomizeForm from './_comp/OrderInvoiceCustomizeForm';
import ProductCustomizeForm from './_comp/ProductCustomizeForm';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useNavigate } from 'react-router-dom';
import useCustomHookCustomizationSettings, {
	CustomizationsTypes,
} from './_hook/HookForCustomizationSettings';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import {
	postCustomizationDoubleOpt,
	postCustomizationOrderInvoice,
	postCustomizationProduct,
	postCustomizationsCheckout,
} from 'src/app/store/slices/settingsPage/configurations/configurationsAsyncThunks';
import { useForm } from 'src/app/utils/hooks/form';

export default function CustomizationsSettings() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.configurations);

	// custom hook
	const { customizationsSchema, handelDefaultValue } = useCustomHookCustomizationSettings();

	const handleSubmit = (values: CustomizationsTypes) => {
		dispatch(postCustomizationsCheckout(values)).then((promiseResponse) => {
			if (promiseResponse.payload.code === 200) {
				navigate(-1);
			}
		});

		dispatch(postCustomizationProduct(values)).then((promiseResponse) => {
			if (promiseResponse.payload.code === 200) {
				navigate(-1);
			}
		});

		dispatch(postCustomizationDoubleOpt(values)).then((promiseResponse) => {
			if (promiseResponse.payload.code === 200) {
				navigate(-1);
			}
		});

		dispatch(postCustomizationOrderInvoice(values)).then((promiseResponse) => {
			if (promiseResponse.payload.code === 200) {
				navigate(-1);
			}
		});
	};

	const { formStore, onSubmit } = useForm({
		schema: customizationsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Customizations')}>
					<SubHeaderDefaultBtns
						onSubmit={onSubmit}
						isLoading={isLoadingAddOrUpdate}
					/>
				</SubHeader>
				<div className='custom-grid-parent custom_container'>
					<div className='grid-left flex-col-global gap-5'>
						<CheckoutCustomizeForm formStore={formStore} />
						<ProductCustomizeForm formStore={formStore} />
						<NewsletterConsentForm formStore={formStore} />
						<OrderInvoiceCustomizeForm formStore={formStore} />
					</div>
				</div>
				<div className='px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
