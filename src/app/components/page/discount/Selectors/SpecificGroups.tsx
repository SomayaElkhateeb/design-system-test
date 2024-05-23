import { useTranslation } from 'react-i18next';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import { UseFormReturn } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
interface selectItemsInterface {
	id: string;
	name: string;
}

const SpecificGroups = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('specificCustomerGroup') &&
			formStore?.watch('specificCustomerGroup')?.length === 0 && (
				<p className='global_error'>{'choose Customers group required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='specificCustomerGroup'
				label={t('Select Customer Group')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('Customer Group')}
						getvalue={(value) => formStore.setValue('specificCustomerGroup', value)}
						name='specificCustomerGroup'
						array={selectItems}
						MainValue={formStore.watch('specificCustomerGroup')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificGroups;
