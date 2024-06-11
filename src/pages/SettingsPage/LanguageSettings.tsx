import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import AdminOrLanguageDefaults from 'src/app/components/page/SettingPage/GeneralSettings/AdminOrLanguageDefaults';
import DefaultLanguageSection from 'src/app/components/page/SettingPage/LanguageSettings/DefaultLanguage';
import useCustomHookLanguageSettings, {
	languageSettingsInterface,
} from 'src/app/components/page/SettingPage/LanguageSettings/HookForLanguageSettings';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

const LanguageSettings = () => {
	//  hooks
	const { t } = useTranslation();

	const handleSubmit = (values: languageSettingsInterface) => {
		console.log(values);
		// handelclose();
	};

	// custom hook
	const { languageSettingsSchema, handelDefaultValue } = useCustomHookLanguageSettings();

	const { formStore, onSubmit } = useForm({
		schema: languageSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<SubHeader title={t('Languages & defaults')}>
					<SubHeaderDefaultBtns onSubmit={() => alert('Submit')} />
				</SubHeader>
				<div className='flex-col-top-section-pages custom_container'>
					<DefaultLanguageSection formStore={formStore} />
					<AdminOrLanguageDefaults
						language
						title={t('Store defaults (shown to cutomers)')}
						formStore={formStore}
					/>
				</div>
				<SubHeaderMobileBtns onSubmit={() => alert('Submit')} />
			</form>
		</Form>
	);
};

export default LanguageSettings;
