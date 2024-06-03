import { HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';

import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';

import TaxRates from 'src/app/components/page/SettingPage/Taxes/TaxRates';
import useCustomHookTaxesForm from 'src/app/components/page/SettingPage/Taxes/HookForTaxesForm';
import TaxOptionsForm from 'src/app/components/page/SettingPage/Taxes/TaxOptionsForm';

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
	const navigate = useNavigate();
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
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Taxes')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='custom_container grid md:grid-cols-3'>
					<div className='col-span-2  grid gap-5'>
						<TaxRates />
						<TaxOptionsForm formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
