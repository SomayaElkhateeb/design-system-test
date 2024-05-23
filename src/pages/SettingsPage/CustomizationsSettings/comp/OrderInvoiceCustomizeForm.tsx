import { useTranslation } from 'react-i18next';

import { CustomizationsFormProps } from './useCustomization';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from './FormSwitchField';
import { customizationsInterface } from './HookForCustomizationsettings';
export default function OrderInvoiceCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();
	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Order invoice')}</h2>
				<p className='paragraph'>{t('Customize invoice sent to customers')}</p>
			</div>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='showTaxNumber'
				label='Show tax number'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='taxNumber'
					label={t('Tax number')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='hideProductImages'
				label='Hide product images'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='showProductsDescription'
				label='Show products description'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='showSKU'
				label='Show SKU'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='showContacts'
				label='Show contacts'
			/>
		</div>
	);
}
