import { useTranslation } from 'react-i18next';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsFormProps, CustomizationsTypes } from './useCustomization';

export default function CheckoutCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid space-1 sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2 flex-col-global gap-[.5rem]'>
				<h2 className='title'>{t('Checkout')}</h2>
				<p className='paragraph'>{t('Customize the way you want your customers to check out')}</p>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='guestCheckout'
				label='Guest checkout'
				description='Allow customers to check out as guests'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='collectShippingAddress'
				label='Only collect shipping address'
				description='Use the shipping address as the billing address by default'
			/>
			<div className='col-span-1'>
				<FormField
					required
					formStore={formStore}
					name='minimumOrderSubtotal'
					label={t('Minimum order subtotal')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='controlOrderPurchase'
				label='Set minimum allowed order subtotal'
				description='Control what your customers can purchase'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='askForCompanyName'
				label='Ask for the company name'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='askForPostalCode'
				label='Ask for a ZIP/postal code'
			/>
			<FormChoiceChips<CustomizationsTypes>
				formStore={formStore}
				name='checkOutWith'
				label='Customer can check out with'
				options={['Email & phone', 'Email only', 'Phone only']}
			/>
		</div>
	);
}
