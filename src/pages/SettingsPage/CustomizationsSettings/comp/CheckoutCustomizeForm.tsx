import { useTranslation } from 'react-i18next';

import { CustomizationsFormProps, customizationsInterface } from './useCustomization';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from './FormSwitchField';
import FormChoiceChips from './FormChoiceChips';

export default function CheckoutCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title mb-2'>{t('Checkout')}</h2>
				<p className='paragraph'>{t('Customize the way you want your customers to check out')}</p>
			</div>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='guestCheckout'
				label='Guest checkout'
				description='Allow customers to check out as guests'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='collectShippingAddress'
				label='Only collect shipping address'
				description='Use the shipping address as the billing address by default'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='minimumOrderSubtotal'
					label={t('Minimum order subtotal')}
					render={(field) => <Input {...field} />}
				/>
			</div>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='controlOrderPurchase'
				label='Set minimum allowed order subtotal'
				description='Control what your customers can purchase'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='askForCompanyName'
				label='Ask for the company name'
			/>
			<FormSwitchField<customizationsInterface>
				formStore={formStore}
				name='askForPostalCode'
				label='Ask for a ZIP/postal code'
			/>
			<FormChoiceChips<customizationsInterface>
        formStore={formStore}
        name='checkOutWith'
        label='Customer can check out with'
        options={['Email & phone', 'Email only', 'Phone only']}
      />
		</div>
	);
}
