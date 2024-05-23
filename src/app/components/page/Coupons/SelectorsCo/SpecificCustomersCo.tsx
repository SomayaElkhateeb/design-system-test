import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
interface selectItemsInterface {
	id: string;
	name: string;
}

const SpecificCustomersCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();

	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('specificCustomer') &&
			formStore?.watch('specificCustomer')?.length === 0 && (
				<p className='global_error'>{'choose Customer required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='specificCustomer'
				label={t('Select Customers')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('Customers')}
						getvalue={(value) => formStore.setValue('specificCustomer', value)}
						name='specificCustomer'
						array={selectItems}
						MainValue={formStore.watch('specificCustomer')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificCustomersCo;
