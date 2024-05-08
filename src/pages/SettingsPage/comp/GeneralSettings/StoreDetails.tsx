import { Input } from 'src/app/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { generalSettingsInterface } from './GeneralSettings';

const options = [{ value: 'design', label: 'design' }];
const StoreDetails = ({ formStore }: { formStore: UseFormReturn<generalSettingsInterface> }) => {
	const { t } = useTranslation();
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
			</div>
		</section>
	);
};

export default StoreDetails;
