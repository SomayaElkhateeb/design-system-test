import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { generalSettingsInterface } from './GeneralSettings';
import 'react-phone-input-2/lib/material.css';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
const options = [{ value: 'design', label: 'design' }];
const StoreDetails = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	//  hooks
	const { t } = useTranslation();

	const handleOnChange = (e: string) => {
		formStore.setValue('storeContactPhone', e);
	};
	return (
		<section className='serviceDetails-sharedClass flex-col-top-section-pages p-[1.2rem] md:w-[70%] '>
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
