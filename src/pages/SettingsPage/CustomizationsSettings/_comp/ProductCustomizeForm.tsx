import { useTranslation } from 'react-i18next';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsFormProps, CustomizationsTypes } from './useCustomization';

export default function ProductCustomizeForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid space-1 sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2'>
				<h2 className='title  flex-col-global  gap-[.3rem]'>{t('Product')}</h2>
				<p className='paragraph'>{t('Customize product listing')}</p>
			</div>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='hideOutOfStock'
				label='Hide out of stock products'
			/>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='activateProductComparison'
				label='Activate product comparison'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='maxComparisons'
					label={t('Maximum comparisons')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='autoArchiveOrder'
				label='Automatically archive the order'
				description='Delivered orders will be automatically assigned as closed.'
			/>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showProductStock'
				label='Show product stock in product page'
				description='Show when product stock reach defined limit'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='productStockLimit'
					label={t('Product stock limit')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showPurchasesNum'
				label='Show purchases number in product page'
				description='Show when product purchases reach defined limit'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='purchasesNumExceeds'
					label={t('When purchases number exceeds')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='limitDownloadAttempts'
				label='Limit number of download attempts for digital products'
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='maxDownloadAttempts'
					label={t('Maximum number of attempts')}
					render={(field) => <Input type='number' {...field} />}
				/>
			</div>
		</div>
	);
}
