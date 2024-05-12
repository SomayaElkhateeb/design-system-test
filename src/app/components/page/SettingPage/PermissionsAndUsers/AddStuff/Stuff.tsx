import { UseFormReturn } from 'react-hook-form';
import { addStuffInterface } from './AddStuff';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

export default function Stuff({ formStore }: { formStore: UseFormReturn<addStuffInterface> }) {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='serviceDetails-sharedClass p-5 '>
			<div className='flex-col-top-section-pages md:w-[50%]'>
				<FormField
					formStore={formStore}
					name='name'
					label={t('Full name')}
					render={(field) => <Input {...field} />}
				/>

				<FormField
					formStore={formStore}
					name='storeIndustry'
					label={t('Role')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
							<Select
								onValueChange={field.onChange}
								value={field.value}
								required={field.required}
								name={field.name}
							>
								<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
									<SelectValue placeholder='Select role' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='design'>Select role</SelectItem>
								</SelectContent>
							</Select>
						</div>
					)}
				/>

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
