import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';

import 'react-phone-input-2/lib/material.css';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import { generalSettingsInterface } from 'src/pages/SettingsPage/GeneralSettings';

const StoreDetails = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	//  hooks
	const { t } = useTranslation();

	return (
		<section className='global-cards flex-col-top-section-pages p-[1.2rem] md:w-[70%] '>
			<h3 className='title'>{t('Store details')}</h3>
			<div className='flex-col-top-section-pages gap-[1rem]'>
				<FormField
					formStore={formStore}
					name='storeName'
					label={t('Store name')}
					render={(field) => <Input {...field} placeholder={'Sary'} />}
				/>
				<FormField
					formStore={formStore}
					name='storeEmail'
					label={t('Store contact email')}
					render={(field) => <Input {...field} placeholder={'Sary@gmail.com'} />}
				/>
				<FormField
					formStore={formStore}
					name='storeIndustry'
					label={t('Store industry')}
					render={(field) => (
						<div className='flex-col-top-section-pages gap-[.2rem]'>
							<Select
								onValueChange={field.onChange}
								value={field.value}
								required={field.required}
								name={field.name}
							>
								<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
									<SelectValue placeholder='Design' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='design'>Design</SelectItem>
									<SelectItem value='theme'>Theme</SelectItem>
								</SelectContent>
							</Select>
						</div>
					)}
				/>
				<FormField
					formStore={formStore}
					name='storeContactPhone'
					label={t('Store contact phone')}
					render={(field) => (
						<CustomPhoneInput
							value={field.value}
							onHandleChange={field.onChange}

							// isLoading={isLoading}
						/>
					)}
				/>
			</div>
		</section>
	);
};

export default StoreDetails;
