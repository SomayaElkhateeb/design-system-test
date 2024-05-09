import { UseFormReturn } from 'react-hook-form';
import { addStuffInterface } from './AddStuff';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

export default function Stuff({ formStore }: { formStore: UseFormReturn<addStuffInterface> }) {
	const { t } = useTranslation();
	return (
		<div className='global-cards'>
			<div className='w-[30rem]'>
				<FormField
					formStore={formStore}
					name='name'
					label={t('Full name')}
					render={(field) => <Input {...field} />}
				/>
			</div>
			{/* select box */}
			<div className='w-[30rem]'>
				<FormField
					formStore={formStore}
					name='email'
					label={t('Email address')}
					render={(field) => <Input {...field} />}
				/>
			</div>
		</div>
	);
}
