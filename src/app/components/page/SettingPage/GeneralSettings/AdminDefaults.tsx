import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { generalSettingsInterface } from './GeneralSettings';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
const AdminDefaults = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	//  hooks
	const { t } = useTranslation();

	return (
		<section className='cardDetails-sharedClass flex-col-top-section-pages p-[1.2rem] md:w-[70%] '>
			<h3 className='title'>{t('Admin defaults (shown to you)')}</h3>
			<div className='flex-col-top-section-pages gap-[1rem]'>
				{/*  default time */}
				<FormField
					formStore={formStore}
					name='defaultTime'
					label={t('Default time')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
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
						</div>
					)}
				/>
				{/*  default currency */}
				<FormField
					formStore={formStore}
					name='defaultCurrency'
					label={t('Default currency')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
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
						</div>
					)}
				/>

				{/*  default length */}
				<FormField
					formStore={formStore}
					name='defaultLength'
					label={t('Default length')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
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
						</div>
					)}
				/>

				{/*  default weight */}
				<FormField
					formStore={formStore}
					name='defaultWeight'
					label={t('Default weight')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
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
						</div>
					)}
				/>
			</div>
		</section>
	);
};

export default AdminDefaults;
