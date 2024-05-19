import { useTranslation } from 'react-i18next';

import { UseFormReturn } from 'react-hook-form';

import FormField from '../../ui/form/field';
import { Input } from '../../ui/input';
import { Switch } from '../../ui/switch';
import { Textarea } from '../../ui/textarea';
import { addCustomerGroupInterface } from './HookForAddCustomerGroupForm';

export default function GeneralInfoCustomerGroupInfo({
	formStore,
}: {
	formStore: UseFormReturn<addCustomerGroupInterface>;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='global-cards gap-[1.2rem]'>
			<h2 className='title'>{t('General Info')}</h2>
			<div className='flex-col-top-section-pages gap-[1rem]'>
				<FormField
					formStore={formStore}
					name='groupName'
					label={t('Group Name')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>
				<FormField
					formStore={formStore}
					name='description'
					label={t('Description')}
					render={(field) => <Textarea {...field} placeholder={''} />}
				/>
				<FormField
					formStore={formStore}
					label={t('Active?')}
					name='active'
					render={(field) => (
						<div className='flex gap-2 items center'>
							<Switch checked={field.value} onCheckedChange={field.onChange} />
							<p className='text-title text-sm font-normal mt-[.1rem] '>
								{formStore.watch('active') ? 'on' : 'off'}
							</p>
						</div>
					)}
				/>
			</div>
		</div>
	);
}
