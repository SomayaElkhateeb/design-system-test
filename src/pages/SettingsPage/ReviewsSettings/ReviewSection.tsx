import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';

import { reviewInterface } from './HookForReviewSettings';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';

export default function ReviewSectionForm({
	formStore,
}: {
	formStore: UseFormReturn<reviewInterface>;
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

				<FormSwitchField<reviewInterface> formStore={formStore} name='enable' />
			</div>

			<div className='flex-col-global  gap-[1.3rem]'>
				<TabbedFormField
					formStore={formStore}
					keys={[
						{ name: 'name_en', label: 'En' },
						{ name: 'name_ar', label: 'عربي' },
					]}
					label={t('Name')}
					renderer={(field) => <Input {...field} placeholder={'mohamed'} />}
				/>
				<FormField
					formStore={formStore}
					name='email'
					label={t('Email description')}
					render={(field) => <Input {...field} placeholder={'Sary@gmail.com'} />}
				/>

				<FormField
					formStore={formStore}
					name='day'
					label={t('Send after purchase')}
					render={(field) => <Input type='number' {...field} placeholder={'7'} />}
				/>
			</div>
		</div>
	);
}