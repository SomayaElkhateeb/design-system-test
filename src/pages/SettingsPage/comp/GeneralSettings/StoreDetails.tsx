import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { generalSettingsInterface } from './GeneralSettings';
import 'react-phone-input-2/lib/material.css';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';

const StoreDetails = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	//  hooks
	const { t } = useTranslation();

	const handleOnChange = (e: string) => {
		formStore.setValue('storeContactPhone', e);
	};

	const selectError = formStore.formState.errors.storeIndustry?.message;
	const selectTouched = formStore.formState.touchedFields.storeIndustry;

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
							{selectError && selectTouched && <p className='global_error'>{selectError}</p>}
						</div>
					)}
				/>
				<div className='flex-col-top-section-pages gap-[.25rem]'>
					<p className='text-sm font-semibold'>{t('Store contact phone')}</p>
					<CustomPhoneInput
						value={formStore.watch('storeContactPhone')}
						onHandleChange={handleOnChange}
						touched={formStore.formState.touchedFields.storeContactPhone}
						errors={formStore.formState.errors.storeContactPhone?.message}
						// isLoading={isLoading}
					/>
				</div>
			</div>
		</section>
	);
};

export default StoreDetails;
