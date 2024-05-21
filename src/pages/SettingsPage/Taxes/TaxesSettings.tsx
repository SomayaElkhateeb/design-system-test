import { HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import TaxRates from './TaxRates';
import TaxOptionsForm from './TaxOptionsForm';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

// Interfaces
interface TaxesSettingsInterface {
	taxAppliesTo: string;
	includeTaxInProductPrices: boolean;
	defaultTaxClass: string;
	taxDisplayInCheckout: string;
	zoneDefinedBy: string;
}

export interface TaxesProps {
	formStore: UseFormReturn<TaxesSettingsInterface>;
}
//------------------------------------------------
// Constants
const handelDefaultValue = () => {
	return {
		taxAppliesTo: '',
		includeTaxInProductPrices: false,
		defaultTaxClass: '',
		taxDisplayInCheckout: '',
		zoneDefinedBy: '',
	};
};
const taxesSettingsSchema = {
	taxAppliesTo: z.string().min(1),
	includeTaxInProductPrices: z.boolean().default(false),
	defaultTaxClass: z.string().min(1),
	taxDisplayInCheckout: z.string().min(1),
	zoneDefinedBy: z.string().min(1),
};

export default function TaxesSettings() {
	const { t } = useTranslation();

	const handleSubmit = (values: TaxesSettingsInterface) => {
		console.log(values);
	};

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
				<div className='page-container p-5 grid grid-cols-3'>
					<div className='col-span-2  grid gap-5'>
						<TaxRates />
						<TaxOptionsForm formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
