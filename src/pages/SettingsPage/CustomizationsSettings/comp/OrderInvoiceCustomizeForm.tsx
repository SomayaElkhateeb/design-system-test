import { useTranslation } from 'react-i18next';

import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CustomizationsFormProps } from '../CustomizationsSettings';
import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';
import { Input } from 'src/app/components/ui/input';

export default function OrderInvoiceCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Order invoice')}</h2>
				<p className='paragraph'>{t('Customize invoice sent to customers')}</p>
			</div>

			<div className='flex justify-between items-center  mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Show tax number')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='showTaxNumber'
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
					name='taxNumber'
					label={t('Tax number')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<div className='flex justify-between items-center  mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Hide product images')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='hideProductImages'
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
					<h3 className='title text-base'>{t('Show products description')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='showProductsDescription'
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
					<h3 className='title text-base'>{t('Show SKU')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='showSKU'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Show contacts')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='showContacts'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='paragraph  mt-[.1rem] '>{t('Enabled')}</p>
						</div>
					)}
				/>
			</div>
		</div>
	);
}
