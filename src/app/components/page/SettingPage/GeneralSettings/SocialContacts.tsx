import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { generalSettingsInterface } from './HookForGeneralForm';

const SocialContacts = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	const { t } = useTranslation();
	return (
		<section className='global-cards  md:w-[70%] '>
			<h3 className='title'>{t('Social contacts')}</h3>
			<div className='flex-col-global gap-[1rem]'>
				<FormField
					formStore={formStore}
					name='facebook'
					label={t('Facebook link')}
					render={(field) => <Input {...field} placeholder={'http://facebook.com/username'} />}
				/>
				<FormField
					formStore={formStore}
					name='instagram'
					label={t('Instagram')}
					render={(field) => <Input {...field} placeholder={'http://instagram.com/username'} />}
				/>
				<FormField
					formStore={formStore}
					name='twitter'
					label={t('Twitter')}
					render={(field) => <Input {...field} placeholder={'http://twitter.com/username'} />}
				/>
				<FormField
					formStore={formStore}
					name='youtube'
					label={t('Youtube')}
					render={(field) => <Input {...field} placeholder={'http://youtube.com/username'} />}
				/>
			</div>
		</section>
	);
};

export default SocialContacts;
