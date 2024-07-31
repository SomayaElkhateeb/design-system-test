import { useTranslation } from 'react-i18next';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsTypes } from '../_hook/HookForCustomizationSettings';
import { UseFormReturn } from 'react-hook-form';
import { useEffect } from 'react';

export default function CheckoutCustomizeForm({ formStore }: { formStore: UseFormReturn<CustomizationsTypes> }) {
	const { t } = useTranslation();

	useEffect(() => {
		formStore.setValue(
			'customizations.checkout.guest_checkout',
			formStore.watch('customizations.checkout.guest_checkout') ? 1 : 0,
		);
	}, [formStore.watch('customizations.checkout.guest_checkout')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.checkout.set_minimum_allowed_order_subtotal',
			formStore.watch('customizations.checkout.set_minimum_allowed_order_subtotal') ? 1 : 0,
		);
	}, [formStore.watch('customizations.checkout.set_minimum_allowed_order_subtotal')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.checkout.ask_for_company_name',
			formStore.watch('customizations.checkout.ask_for_company_name') ? 1 : 0,
		);
	}, [formStore.watch('customizations.checkout.ask_for_company_name')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.checkout.ask_for_zip_postal_code',
			formStore.watch('customizations.checkout.ask_for_zip_postal_code') ? 1 : 0,
		);
	}, [formStore.watch('customizations.checkout.ask_for_zip_postal_code')]);

	return (
		<div className='global-cards grid space-1 sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2 flex-col-global gap-[.5rem]'>
				<h2 className='title'>{t('Checkout')}</h2>
				<p className='paragraph'>{t('Customize the way you want your customers to check out')}</p>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.checkout.guest_checkout'
				label='Guest checkout'
				description='Allow customers to check out as guests'
			/>

			<div className='col-span-1'>
				<FormField
					required
					formStore={formStore}
					name='customizations.checkout.minimum_order_subtotal'
					label={t('Minimum order subtotal')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.checkout.set_minimum_allowed_order_subtotal'
				label='Set minimum allowed order subtotal'
				description='Control what your customers can purchase'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.checkout.ask_for_company_name'
				label='Ask for the company name'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.checkout.ask_for_zip_postal_code'
				label='Ask for a ZIP/postal code'
			/>

			<FormChoiceChips<CustomizationsTypes>
				formStore={formStore}
				name='customizations.checkout.customer_can_checkout_with'
				label='Customer can check out with'
				options={['email_phone', 'email_only', 'phone_only']}
			/>
		</div>
	);
}
