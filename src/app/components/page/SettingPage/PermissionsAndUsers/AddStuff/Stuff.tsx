import { UseFormReturn } from 'react-hook-form';
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
import { addStuffInterface } from './HookForAddStuff';

export default function Stuff({ formStore }: { formStore: UseFormReturn<addStuffInterface> }) {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='cardDetails-sharedClass p-5 '>
			<div className='flex-col-global md:w-[70%]'>
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
						<div className='flex-col-global gap-[.2rem]'>
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
