import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

import { InferredZodSchema } from 'src/app/utils/hooks/form';

import { adminSchema } from './AdminSchema';
import { ValidFormStoreByValues } from 'src/utils/types';

export default function AdminOrLanguageDefaults<TFormStore>({
	formStore,
	title,
	language,
}: {
	formStore: ValidFormStoreByValues<TFormStore, InferredZodSchema<typeof adminSchema>>;
	title: string;
	language?: boolean;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<section className='global-cards  '>
			<h3 className='title'>{title}</h3>
			<div className='flex-col-global gap-[1rem]'>
				{/*  default country */}
				{language && (
					<FormField
						formStore={formStore}
						name='defaultCountry'
						label={t('Default country')}
						render={(field) => (
							<Select
								onValueChange={field.onChange}
								value={field.value}
								required={field.required}
								name={field.name}
							>
								<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
									<SelectValue placeholder='Saudi Arabia' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
				)}
				{/*  default time */}
				<FormField
					formStore={formStore}
					name='defaultTime'
					label={t('Default time')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='Riyadh GMT +3:00' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='Riyadh GMT +3:00'>Riyadh GMT +3:00</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>
				{/*  default currency */}
				<FormField
					formStore={formStore}
					name='defaultCurrency'
					label={t('Default currency')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='SAR' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='SAR'>SAR</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>

				{/*  default length */}
				<FormField
					formStore={formStore}
					name='defaultLength'
					label={t('Default length')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='CM' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='CM'>CM</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>

				{/*  default weight */}
				<FormField
					formStore={formStore}
					name='defaultWeight'
					label={t('Default weight')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='KG' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='KG'>KG</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>
			</div>
		</section>
	);
}
