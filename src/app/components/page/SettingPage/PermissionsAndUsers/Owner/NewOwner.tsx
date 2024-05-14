import { UseFormReturn } from 'react-hook-form';
import { addOwnerInterface } from './TransferOwnership';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export default function NewOwner({ formStore }: { formStore: UseFormReturn<addOwnerInterface> }) {
	const { t } = useTranslation();
	return (
		<div className='cardDetails-sharedClass p-5   md:w-[75%]'>
			<div className='flex-col-top-section-pages gap-4 md:w-[50%]'>
				<div>
					<h3 className='text-title font-semibold'>{t('New Owner')}</h3>
					<p className='text-subtitle text-sm pt-2'>{t('You’ll lose your privleges')}</p>
				</div>

				<FormField
					formStore={formStore}
					name='name'
					label={t('Full name')}
					render={(field) => <Input {...field} />}
				/>

				<FormField
					formStore={formStore}
					name='email'
					label={t('Email address')}
					render={(field) => <Input {...field} />}
				/>

				<FormField
					formStore={formStore}
					name='password'
					label={t('Your password (for security)')}
					render={(field) => <Input {...field} />}
				/>
			</div>
		</div>
	);
}
