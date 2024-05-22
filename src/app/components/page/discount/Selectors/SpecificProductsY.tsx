import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
interface selectItemsInterface {
	id: string;
	name: string;
}
const SpecificProductsY = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('selectProductsY') &&
			formStore?.watch('selectProductsY')?.length === 0 && (
				<p className='global_error'>{'choose products X required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='selectProductsY'
				label={t('select products y')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('products')}
						getvalue={(value) => formStore.setValue('selectProductsY', value)}
						name='selectProductsY'
						array={selectItems}
						MainValue={formStore.watch('selectProductsY')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificProductsY;
