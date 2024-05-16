import { z } from 'zod';

import { useTranslation } from 'react-i18next';
// comps
import { HeaderSettings } from 'src/app/components/optimized';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

import AdminOrLanguageDefaults from 'src/app/components/page/SettingPage/GeneralSettings/AdminOrLanguageDefaults';
import DefaultLanguageSection from 'src/app/components/page/SettingPage/LanguageSettings/DefaultLanguage';

// /////////////////////
export interface languageSettingsInterface {
	defaultCountry: string;
	defaultTime: string;
	defaultCurrency: string;
	defaultLength: string;
	defaultWeight: string;
	defaultLanguage:string
}

const LanguageSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: languageSettingsInterface) => {
		console.log(values);
		// handelclose();
	};
	// ////////////////////////////////////////////
	// ///////////////////////////////////////////
	const handelDefaultValue = () => {
		return {
			defaultTime: '',
			defaultCountry: '',
			defaultCurrency: '',
			defaultLength: '',
			defaultWeight: '',
			defaultLanguage:'English'
		};
	};
	// //////////////////////////////////////////
	const generalSettingsSchema = {
		defaultLanguage: z.string().min(1),
		defaultCountry: z.string().min(1),
		defaultTime: z.string().min(1),
		defaultCurrency: z.string().min(1),
		defaultLength: z.string().min(1),
		defaultWeight: z.string().min(1),
	};
	// ////////////////////////////////////////
	// ///////////////////////////////////////
	const { formStore, onSubmit } = useForm({
		schema: generalSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Languages & defaults')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='flex-col-top-section-pages container mx-auto'>
					<DefaultLanguageSection formStore={formStore}/>
					<AdminOrLanguageDefaults
						language
						title={t('Store defaults (shown to cutomers)')}
						formStore={formStore}
					/>
				</div>
			</form>
		</Form>
	);
};

export default LanguageSettings;
