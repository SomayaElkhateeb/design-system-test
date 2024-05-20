import { useTranslation } from 'react-i18next';

import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CustomizationsFormProps } from '../CustomizationsSettings';
import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';
import { Input } from 'src/app/components/ui/input';

export default function ProductCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Product')}</h2>
				<p className='paragraph'>{t('Customize product listing')}</p>
			</div>

			<div className='flex justify-between items-center  mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Hide out of stock products')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='hideOutOfStock'
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
					<h3 className='title text-base'>{t('Activate product comparison')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='activateProductComparison'
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
					name='maxComparisons'
					label={t('Maximum comparisons')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Automatically archive the order')}</h3>
					<p className='paragraph text-subtitle'>
						{t('Delivered orders will be automatically assigned as closed.')}
					</p>
				</div>
				<FormField
					formStore={formStore}
					name='autoArchiveOrder'
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
					<h3 className='title text-base'>{t('Show product stock in product page')}</h3>
					<p className='paragraph text-subtitle'>
						{t('Show when product stock reach defined limit')}
					</p>
				</div>
				<FormField
					formStore={formStore}
					name='showProductStock'
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
					name='productStockLimit'
					label={t('Product stock limit')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<div className='flex justify-between items-center col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Show purchases number in product page')}</h3>
					<p className='paragraph text-subtitle'>
						{t('Show when product purchases reach defined limit')}
					</p>
				</div>
				<FormField
					formStore={formStore}
					name='showPurchasesNum'
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
					name='purchasesNumExceeds'
					label={t('When purchases number exceeds')}
					render={(field) => <Input {...field} />}
				/>
			</div>
			<div className='flex justify-between items-center mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>
						{t('Limit number of download attempts for digital products')}
					</h3>
				</div>
				<FormField
					formStore={formStore}
					name='limitDownloadAttempts'
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
					name='maxDownloadAttempts'
					label={t('Maximum number of attempts')}
					render={(field) => <Input {...field} />}
				/>
			</div>
		</div>
	);
}
