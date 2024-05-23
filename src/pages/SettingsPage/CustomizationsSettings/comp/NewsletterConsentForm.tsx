import { useTranslation } from 'react-i18next';


import { CustomizationsFormProps, CustomizationsInterface } from './useCustomization';

import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { MultiChoiceChips } from 'src/app/components/optimized';
import { Input } from 'src/app/components/ui/input';
import FormSwitchField from './FormSwitchField';
import FormChoiceChips from './FormChoiceChips';
import { customizationsInterface } from './HookForCustomizationsettings';
export default function NewsletterConsentForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();

	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2 flex-col-top-section-pages  gap-[.3rem]'>
				<h2 className='title '>{t('Double opt-in')}</h2>
				<p className='paragraph'>
					{t('Ask for customers consent for receiving email or SMS newsletter')}
				</p>
			</div>
			<div className='col-span-2'>
				<h3 className='title text-base'>{t('Require customers to confirm their')}</h3>
				<MultiChoiceChips
					options={[t('Email subscription'), t('SMS subscription')]}
					setSelected={(option: string) => {
						formStore.setValue('subscriptionConfirm', option);
					}}
					selected={formStore.watch('subscriptionConfirm')}
				/>
			</div>
			<FormChoiceChips<CustomizationsInterface>
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
						<Input {...field} placeholder={t('Keep me up to date on news and exclusive offers')} />
					)}
				/>
			</div>
			<FormSwitchField<CustomizationsInterface>
				formStore={formStore}
				name='preselectOption'
				label='Preselect the option for customers'
			/>
			<FormSwitchField<CustomizationsInterface>
				formStore={formStore}
				name='showNewsletterFooter'
				label='Show email newsletter input in footer'
			/>
		</div>
	);
}
