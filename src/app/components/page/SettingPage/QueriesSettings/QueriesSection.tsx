import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';

import { Switch } from 'src/app/components/ui/switch';
import { Textarea } from 'src/app/components/ui/textarea';
import { queriesInterface } from './HookForQueriesSettings';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';

export default function QueriesSectionForm({
	formStore,
}: {
	formStore: UseFormReturn<queriesInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards gap-[1.3rem]'>
			<div className='flex-col-global  gap-[.85rem]'>
				<div className='flex-col-global  gap-[.35rem]'>
					<h2 className='title'>{t('Targeting customer to review')}</h2>
					<p className='subtitle'>
						{t('You can send an email for customers who purchased from you to review')}
					</p>
				</div>

				<FormSwitchField<queriesInterface> formStore={formStore} name='enable' />
			</div>

			<TabbedFormField
				formStore={formStore}
				keys={[
					{ name: 'describtion_en', label: 'En' },
					{ name: 'describtion_ar', label: 'عربي' },
				]}
				label={t('Reply description')}
				renderer={(field) => <Textarea {...field} placeholder={'reply'} />}
			/>
		</div>
	);
}
