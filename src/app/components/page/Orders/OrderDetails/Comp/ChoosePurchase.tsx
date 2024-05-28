import { UseFormReturn } from 'react-hook-form';
import { checkOutInterface } from '../Forms/HookCheckoutForm';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import SpecificAutoCompleteInput from '../../../discount/Selectors/SpecificAutoCompleteInput';
import { useTranslation } from 'react-i18next';

export default function ChoosePurchase({
	formStore,
}: {
	formStore: UseFormReturn<checkOutInterface>;
}) {
	const purchaseToOptions = ['onLine', 'in branch'];

	const purchaseOption = (option: string) => {
		formStore.setValue('purchase', option);
	};
	return (
		<>
			<SingleChoiceChips
				options={purchaseToOptions}
				setSelected={purchaseOption}
				selected={formStore.watch('purchase')}
			/>

			<PurchaseTo purchaseOptions={formStore.watch('purchase')} formStore={formStore} />
		</>
	);
}

function PurchaseTo({
	purchaseMethodOptions,
	formStore,
}: {
	purchaseMethodOptions: string;
	formStore: UseFormReturn<checkOutInterface>;
}) {
	const { t } = useTranslation();
	const handelRenderingComponentWithApplyTo = () => {
		switch (purchaseMethodOptions) {
			case 'onLine':
				return (
					<SpecificAutoCompleteInput<checkOutInterface>
						name='onLine'
						label={t('onLine')}
						formStore={formStore}
					/>
				);
			case 'branch':
				return (
					<SpecificAutoCompleteInput<checkOutInterface>
						name='branch'
						label={t('in branch')}
						formStore={formStore}
					/>
				);
		}
	};
	return handelRenderingComponentWithApplyTo();
}
