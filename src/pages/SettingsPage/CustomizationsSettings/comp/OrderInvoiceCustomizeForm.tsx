import { useTranslation } from 'react-i18next';

import { CustomizationsFormProps, CustomizationsTypes } from './useCustomization';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from '../../../../app/components/ui/form/FormSwitchField';
export default function OrderInvoiceCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();
	return (
		<div className='global-cards grid sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Order invoice')}</h2>
				<p className='paragraph'>{t('Customize invoice sent to customers')}</p>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showTaxNumber'
				label='Show tax number'
			/>
			<div className='col-span-1'>
				<FormField
					required
					formStore={formStore}
					name='taxNumber'
					label={t('Tax number')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='hideProductImages'
				label='Hide product images'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showProductsDescription'
				label='Show products description'
			/>
			<FormSwitchField<CustomizationsTypes> formStore={formStore} name='showSKU' label='Show SKU' />
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showContacts'
				label='Show contacts'
			/>
		</div>
	);
}
