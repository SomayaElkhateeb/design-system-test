import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CustomAutoComplete from 'src/app/components/optimized/InputsFields/AutoCompleteMultiple';
import FormField from 'src/app/components/ui/form/field';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';
interface selectItemsInterface {
	id: string;
	name: string;
}
const SpecificProductsCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('specificProducts') &&
			formStore?.watch('specificProducts')?.length === 0 && (
				<p className='global_error'>{'choose products required'}</p>
			)
		);
	};

	return (
		<div className='flex-col-top-section-pages gap-0'>
			<FormField
				formStore={formStore}
				name='specificProducts'
				label={t('select products')}
				render={(field) => (
					<CustomAutoComplete<selectItemsInterface>
						placeholder={t('products')}
						getvalue={(value) => formStore.setValue('specificProducts', value)}
						name='specificProducts'
						array={selectItems}
						MainValue={formStore.watch('specificProducts')}
					/>
				)}
			/>
			{handelAutoCompleteError()}
		</div>
	);
};

export default SpecificProductsCo;
