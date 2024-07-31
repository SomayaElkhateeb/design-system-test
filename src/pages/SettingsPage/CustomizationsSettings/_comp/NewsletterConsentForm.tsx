import { useTranslation } from 'react-i18next';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { Input } from 'src/app/components/ui/input';
import { CustomizationsTypes } from '../_hook/HookForCustomizationSettings';
import { UseFormReturn } from 'react-hook-form';
import FormField from 'src/app/components/ui/form/field';
import { useEffect } from 'react';

export default function NewsletterConsentForm({ formStore }: { formStore: UseFormReturn<CustomizationsTypes> }) {
	const { t } = useTranslation();

	useEffect(() => {
		formStore.setValue(
			'customizations.double_opt.preselect_option_for_customers',
			formStore.watch('customizations.double_opt.preselect_option_for_customers') ? 1 : 0,
		);
	}, [formStore.watch('customizations.double_opt.preselect_option_for_customers')]);

	useEffect(() => {
		formStore.setValue(
			'customizations.double_opt.show_email_newsletter_in_footer',
			formStore.watch('customizations.double_opt.show_email_newsletter_in_footer') ? 1 : 0,
		);
	}, [formStore.watch('customizations.double_opt.show_email_newsletter_in_footer')]);
	
	return (
		<div className='global-cards grid sm:grid-cols-2 grid-cols-1'>
			<div className='col-span-2 flex-col-global  gap-[.3rem]'>
				<h2 className='title '>{t('Double opt-in')}</h2>
				<p className='paragraph'>
					{t('Ask for customers consent for receiving email or SMS newsletter')}
				</p>
			</div>

			<FormChoiceChips<CustomizationsTypes>
				formStore={formStore}
				name='customizations.double_opt.require_customers_confirm_subscription'
				label='Require customers to confirm their'
				options={['email_sms', 'email_only', 'sms_only']}
			/>

			<FormChoiceChips<CustomizationsTypes>
				formStore={formStore}
				name='customizations.double_opt.show_option_at'
				label='Show an option to subscribe at'
				options={['registration', 'checkout', 'never_show']}
			/>
			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='customizations.double_opt.text_label'
					label={t('Text label')}
					render={(field) => (
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
				name='customizations.double_opt.preselect_option_for_customers'
				label='Preselect the option for customers'
			/>
			<FormSwitchField<CustomizationsTypes>
				formStore={formStore}
				name='customizations.double_opt.show_email_newsletter_in_footer'
				label='Show email newsletter input in footer'
			/>
		</div>
	);
}
