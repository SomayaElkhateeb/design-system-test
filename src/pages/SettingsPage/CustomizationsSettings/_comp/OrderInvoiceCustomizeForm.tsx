import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsTypes } from '../_hook/HookForCustomizationSettings';
import { useEffect } from 'react';
export default function OrderInvoiceCustomizeForm({ formStore }: { formStore: UseFormReturn<CustomizationsTypes> }) {
	const { t } = useTranslation();

	useEffect(() => {
		formStore.setValue(
			'customizations.order_invoice.show_tax_number',
			formStore.watch('customizations.order_invoice.show_tax_number') ? 1 : 0,
		);
	}, [formStore.watch('customizations.order_invoice.show_tax_number')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.order_invoice.hide_product_images',
			formStore.watch('customizations.order_invoice.hide_product_images') ? 1 : 0,
		);
	}, [formStore.watch('customizations.order_invoice.hide_product_images')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.order_invoice.show_products_description',
			formStore.watch('customizations.order_invoice.show_products_description') ? 1 : 0,
		);
	}, [formStore.watch('customizations.order_invoice.show_products_description')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.order_invoice.show_sku' ,
			formStore.watch('customizations.order_invoice.show_sku' ) ? 1 : 0,
		);
	}, [formStore.watch('customizations.order_invoice.show_sku' )]);

	useEffect(() => {
		formStore.setValue(
			'customizations.order_invoice.show_contacts',
			formStore.watch('customizations.order_invoice.show_contacts') ? 1 : 0,
		);
	}, [formStore.watch('customizations.order_invoice.show_contacts')]);


	return (
		<div className='global-cards grid sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Order invoice')}</h2>
				<p className='paragraph'>{t('Customize invoice sent to customers')}</p>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.order_invoice.show_tax_number'
				label='Show tax number'
			/>
			<div className='col-span-1'>
				<FormField
					required
					formStore={formStore}
					name='customizations.order_invoice.tax_number'
					label={t('Tax number')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.order_invoice.hide_product_images'
				label='Hide product images'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.order_invoice.show_products_description'
				label='Show products description'
			/>
			<FormSwitchField<CustomizationsTypes> 
				formStore={formStore} 
				name='customizations.order_invoice.show_sku' 
				label='Show SKU' 
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.order_invoice.show_contacts'
				label='Show contacts'
			/>
		</div>
	);
}
