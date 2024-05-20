import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import { Switch } from 'src/app/components/ui/switch';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { preferncesInterface } from './HookForPreferncePageForm';

export default function PasswordSection({
	formStore,
}: {
	formStore: UseFormReturn<preferncesInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards flex-col-top-section-pages'>
			<div className='flex-col-top-section-pages gap-[.25rem]'>
				<h3 className='title'>{t('Password protection')}</h3>
				<p className='subtitle text-sm'>
					{t('Make your store only available for cutomers who have the password')}
				</p>
			</div>
			<FormField
				formStore={formStore}
				name='passwordEnable'
				render={(field) => (
					<div className='flex gap-2 items center'>
						<Switch checked={field.value} onCheckedChange={field.onChange} />{' '}
						<p className='text-title text-sm font-normal mt-[.1rem] '>{t('Enabled')}</p>
					</div>
				)}
			/>
			<FormField
				formStore={formStore}
				name='password'
				label={t('Password')}
				render={(field) => <Input {...field} />}
			/>
			<TabbedFormField
				formStore={formStore}
				keys={[
					{ name: 'passwordMessageEn', label: 'En' },
					{ name: 'passwordMessageAr', label: 'عربي' },
				]}
				label={t('Message')}
				renderer={(field) => <Textarea {...field} placeholder={'message'} />}
			/>
		</div>
	);
}
