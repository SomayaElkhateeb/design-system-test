import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import useCustomHookTaxesForm from 'src/app/components/page/SettingPage/Taxes/HookForTaxesForm';
import TaxOptionsForm from 'src/app/components/page/SettingPage/Taxes/TaxOptionsForm';
import TaxRates from 'src/app/components/page/SettingPage/Taxes/TaxRates';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

// Interfaces
export interface TaxesSettingsInterface {
	taxAppliesTo: string;
	includeTaxInProductPrices: boolean;
	defaultTaxClass: string;
	taxDisplayInCheckout: string;
	zoneDefinedBy: string;
	checkOutWith: string;
}

export interface TaxesProps {
	formStore: UseFormReturn<TaxesSettingsInterface>;
}

export default function TaxesSettings() {
	const { t } = useTranslation();

	const handleSubmit = (values: TaxesSettingsInterface) => {
		console.log(values);
	};

	//  custom hook

	const { taxesSettingsSchema, handelDefaultValue } = useCustomHookTaxesForm();
	const { formStore, onSubmit } = useForm({
		schema: taxesSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<SubHeader title={t('Taxes')}>
					<SubHeaderDefaultBtns onSubmit={() => alert('Submit')} />
				</SubHeader>
				<div className='custom_container grid md:grid-cols-3'>
					<div className='col-span-2  grid gap-5'>
						<TaxRates />
						<TaxOptionsForm formStore={formStore} />
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={() => alert('Submit')} />
			</form>
		</Form>
	);
}
