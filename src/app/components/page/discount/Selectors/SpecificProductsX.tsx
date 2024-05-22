import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
interface selectItemsInterface {
	id: string;
	name: string;
}
const SpecificProductsX = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('selectProductsX') &&
			formStore?.watch('selectProductsX')?.length === 0 && (
				<p className='global_error'>{'choose products X required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='selectProductsX'
				label={t('select products x')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('products')}
						getvalue={(value) => formStore.setValue('selectProductsX', value)}
						name='specificProductsX'
						array={selectItems}
						MainValue={formStore.watch('selectProductsX')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificProductsX;
