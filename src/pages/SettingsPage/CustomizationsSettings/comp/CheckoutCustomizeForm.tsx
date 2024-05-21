import { useTranslation } from 'react-i18next';

import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CustomizationsFormProps } from '../CustomizationsSettings';
import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';
import { Input } from 'src/app/components/ui/input';

export default function CheckoutCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Checkout')}</h2>
				<p className='paragraph'>{t('Customize the way you want your customers to check out')}</p>
			</div>
			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Guest checkout')}</h3>
					<p className='paragraph text-subtitle'>{t('Allow customers to check out as guests')}</p>
				</div>
				<FormField
					formStore={formStore}
					name='guestCheckout'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Only collect shipping address')}</h3>
					<p className='paragraph text-subtitle'>
						{t('Use the shipping address as the billing address by default')}
					</p>
				</div>
				<FormField
					formStore={formStore}
					name='collectShippingAddress'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='minimumOrderSubtotal'
					label={t('Minimum order subtotal')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Set minimum allowed order subtotal')}</h3>
					<p className='paragraph text-subtitle'>{t('Control what your customers can purchase')}</p>
				</div>
				<FormField
					formStore={formStore}
					name='controlOrderPurchase'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='flex justify-between items-center  mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Ask for the company name')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='askForCompanyName'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='flex justify-between items-center mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Ask for a ZIP/postal code')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='askForPostalCode'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='col-span-2'>
				<h3 className='title text-base'>{t('Customer can check out with')}</h3>
				<SingleChoiceChips
					options={[t('Email & phone'), t('Email only'), t('Phone only')]}
					setSelected={(option: string) => {
						formStore.setValue('checkOutWith', option);
					}}
					selected={formStore.watch('checkOutWith')}
				/>
			</div>
		</div>
	);
}
