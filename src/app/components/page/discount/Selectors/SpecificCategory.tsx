import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';

interface selectItemsInterface {
	id: string;
	name: string;
}
const SpecificCategoryCO = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	//  hooks
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('specificCategories') &&
			formStore?.watch('specificCategories')?.length === 0 && (
				<p className='global_error'>{'choose categories required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='specificCategories'
				label={t('Select Category')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('Category')}
						getvalue={(value) => formStore.setValue('specificCategories', value)}
						name='specificCategories'
						array={selectItems}
						MainValue={formStore.watch('specificCategories')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificCategoryCO;
