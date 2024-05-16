import { useTranslation } from 'react-i18next';
import { preferncesInterface } from './PreferencesPage';
import { UseFormReturn } from 'react-hook-form';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import { Switch } from 'src/app/components/ui/switch';
import FormField from 'src/app/components/ui/form/field';

export default function MaintainanceSection({
	formStore,
}: {
	formStore: UseFormReturn<preferncesInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards flex-col-top-section-pages'>
			<div className='flex-col-top-section-pages gap-[.25rem]'>
				<h3 className='title'>{t('Maintenance Mode Status')}</h3>
				<p className='subtitle text-sm'>
					{t(
						'Prevents customers from browsing your store. They will see a maintenance message. If logged in as admin, you will see the store as normal.',
					)}
				</p>
			</div>
			<FormField
				formStore={formStore}
				name='maintainanceEnable'
				render={(field) => (
					<div className='flex gap-2 items center'>
						<Switch checked={field.value} onCheckedChange={field.onChange} />{' '}
						<p className='text-title text-sm font-normal mt-[.1rem] '>{t('Enabled')}</p>
					</div>
				)}
			/>
			<TabbedFormField
				formStore={formStore}
				keys={[
					{ name: 'maintainanceMessageEn', label: 'En' },
					{ name: 'maintainanceMessageAr', label: 'عربي' },
				]}
				label={t('Message')}
				renderer={(field) => <Textarea {...field} placeholder={'message'} />}
			/>
		</div>
	);
}
