import { useTranslation } from 'react-i18next';

import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CustomizationsFormProps } from '../CustomizationsSettings';
import FormField from 'src/app/components/ui/form/field';
import { Switch } from 'src/app/components/ui/switch';
import { Input } from 'src/app/components/ui/input';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { MultiChoiceChips } from 'src/app/components/optimized';
import { useState } from 'react';

export default function NewsletterConsentForm({ formStore }: CustomizationsFormProps) {
	const { t } = useTranslation();
	// const [options, setOptions] = useState<string[]>([]);

	// const handleSubscriptionConfirm = (option: string) => {
	// 	setOptions((prevOptions) => [...prevOptions, option]);
	// 	formStore.setValue('subscriptionConfirm', options);
	// };

	// const handleSubscriptionConfirm = (option: string) => {
	//   setOptions((prevSelected) => {
	//     if (prevSelected.includes(option)) {
	//       return prevSelected.filter(item => item !== option);
	//     } else {
	//       return [...prevSelected, option];
	//     }
	//   });
	// };

	return (
		<div className='global-cards grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Double opt-in')}</h2>
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

			<div className='col-span-2'>
				<h3 className='title text-base'>{t('Show an option to subscribe at')}</h3>
				<SingleChoiceChips
					options={[t('Registration'), t('Checkout'), t('Never show')]}
					setSelected={(option: string) => {
						formStore.setValue('showSubscribeOptionAt', option);
					}}
					selected={formStore.watch('showSubscribeOptionAt')}
				/>
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
			<div className='flex justify-between items-center  mb-3 col-span-2'>
				<div className='grid gap-1'>
					<h3 className='title text-base'>{t('Preselect the option for customers')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='preselectOption'
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
					<h3 className='title text-base'>{t('Show email newsletter input in footer')}</h3>
				</div>
				<FormField
					formStore={formStore}
					name='showNewsletterFooter'
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
