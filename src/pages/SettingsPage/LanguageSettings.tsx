import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

import AdminOrLanguageDefaults from 'src/app/components/page/SettingPage/GeneralSettings/AdminOrLanguageDefaults';
import DefaultLanguageSection from 'src/app/components/page/SettingPage/LanguageSettings/DefaultLanguage';
import useCustomHookLanguageSettings, {
	languageSettingsInterface,
} from 'src/app/components/page/SettingPage/LanguageSettings/HookForLanguageSettings';

const LanguageSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// ///////////////////////
	// //////////////////////
	const handleSubmit = (values: languageSettingsInterface) => {
		console.log(values);
		// handelclose();
	};
	// //////////////////////////////
	// ////////////////////////////
	// custom hook

	const { languageSettingsSchema, handelDefaultValue } = useCustomHookLanguageSettings();
	// ////////////////////////////////////////
	// ///////////////////////////////////////
	const { formStore, onSubmit } = useForm({
		schema: languageSettingsSchema,
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
				<div className='flex-col-top-section-pages custom_container'>
					<DefaultLanguageSection formStore={formStore} />
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
