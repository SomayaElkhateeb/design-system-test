import { useTranslation } from 'react-i18next';
import { MultiChoiceChips } from 'src/app/components/optimized';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsFormProps, CustomizationsTypes } from './useCustomization';
export default function NewsletterConsentForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2 flex-col-global  gap-[.3rem]'>
				<h2 className='title '>{t('Double opt-in')}</h2>
				<p className='paragraph'>
					{t('Ask for customers consent for receiving email or SMS newsletter')}
				</p>
			</div>
			<div className='col-span-2'>
				<h3 className='title'>{t('Require customers to confirm their')}</h3>
				<MultiChoiceChips
					options={['Email subscription', 'SMS subscription']}
					setSelected={(option) => {
						formStore.setValue('subscriptionConfirm', option);
					}}
					selected={formStore.watch('subscriptionConfirm')}
				/>
			</div>
			<FormChoiceChips<CustomizationsTypes>
				formStore={formStore}
				name='showSubscribeOptionAt'
				label='Show an option to subscribe at'
				options={['Registration', 'Checkout', 'Never show']}
			/>
			<div className='col-span-1'>
				<TabbedFormField
					formStore={formStore}
					keys={[
						{ name: 'newsletterTextEn', label: 'En' },
						{ name: 'newsletterTextAr', label: 'عربي' },
					]}
					label={t('Text label')}
					renderer={(field) => (
						<Input
							required
							{...field}
							placeholder={t('Keep me up to date on news and exclusive offers')}
						/>
					)}
				/>
			</div>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='preselectOption'
				label='Preselect the option for customers'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='showNewsletterFooter'
				label='Show email newsletter input in footer'
			/>
		</div>
	);
}
