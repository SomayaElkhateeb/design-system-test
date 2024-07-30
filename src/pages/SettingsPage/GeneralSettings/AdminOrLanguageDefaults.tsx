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
import { useQuery } from 'react-query';
import { CountriesInterface } from 'src/app/interface/CountriesInterface';
import { CountriesApi } from 'src/app/React-Query/CountriesApi';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';

export default function AdminOrLanguageDefaults<TFormStore>({
	formStore,
	title,
	// language,
}: {
	formStore: ValidFormStoreByValues<TFormStore, InferredZodSchema<typeof adminSchema>>;
	title: string;
	// language?: boolean;
}) {
	//  hooks
	const { t } = useTranslation();

	//  get CountriesData  with api request
	const { data } = useQuery([`countriesData`], () => CountriesApi.countries());
	
	let CountriesData = data?.data?.data;
	return (
		<section className='global-cards  '>
			<h3 className='title'>{title}</h3>
			<div className='flex-col-global gap-[1rem]'>
				{/*  default country */}

				{CountriesData?.length > 0 && (
					<SelectFormField
						name='front.default.country'
						label={t('Default country')}
						formStore={formStore}
						options={CountriesData?.map((e: CountriesInterface) => {
							return {
								label: e?.name,
								value: e?.id?.toString(),
							};
						})}
						placeholder={t('Country')}
					/>
				)}

				{/*  default time */} 
				{/* select timezone */}
				<FormField
					formStore={formStore}
					name='front.default.timezone'
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
				{/* currency */}
				<FormField
					formStore={formStore}
					name='front.default.currency'
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
					name='front.default.length'
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
				{/* select weight */}
				<FormField
					formStore={formStore}
					name='front.default.weight'
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
