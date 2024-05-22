import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import ActiveDates from '../../../../app/components/page/discount/Comp/ActiveDates';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';
import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';
import useCustomHookNewDiscount, { newDiscountInterface } from './HookForNewDiscount';
import { useEffect,  useState } from 'react';

const NewDiscount = () => {
	// hook
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [discountType, setDiscountType] = useState('Free shipping');
	const [applyToType, setApplyToType] = useState('All products');
	const [productXtoYType, setProductXtoYType] = useState<string | undefined>('Free');
	// custom hook
	const { handelDefaultValue, discountSchema } = useCustomHookNewDiscount();
	const data = [{ id: 1, title: t('On') }];

	const handleSaveChanges = async () => {
		// try {
		// 	const formData = formStore.getValues();
		// 	await dispatch(postDiscounts(formData));
		// 	navigate('/marketing/discounts');
		// } catch (error) {
		// 	console.error('Error while saving changes:', error);
		// }
	};

	const handleSubmit: (validatedData: newDiscountInterface) => void = (
		values: newDiscountInterface,
	) => {
		console.log(values);
		// handleSaveChanges();
	};

	const { formStore, onSubmit } = useForm({
		schema: discountSchema(discountType, applyToType, productXtoYType),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useEffect(() => {
		setDiscountType(formStore.watch('discountType'));
		setApplyToType(formStore.watch('applyToType'));
		setProductXtoYType(formStore?.watch('ProductXToProductYType'));
	}, [formStore]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={t('Add Discount')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{ text: t('Save Changes'), onClick: () => {} }}
				/>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<BasicInfo formStore={formStore} />
						<CustomerSegment />
						<MinimumRequirements formStore={formStore} />
						<ActiveDates formStore={formStore} />
					</div>
					<div className='col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
};
export default NewDiscount;
