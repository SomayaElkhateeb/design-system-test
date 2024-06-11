import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { SubHeaderDefaultBtns, SubHeaderMobileBtns } from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import AdminOrLanguageDefaults from 'src/app/components/page/SettingPage/GeneralSettings/AdminOrLanguageDefaults';
import useCustomHookGeneralForm, {
	generalSettingsInterface,
} from 'src/app/components/page/SettingPage/GeneralSettings/HookForGeneralForm';
import LegalDetails from 'src/app/components/page/SettingPage/GeneralSettings/LegalDetails';
import Media from 'src/app/components/page/SettingPage/GeneralSettings/Media';
import SocialContacts from 'src/app/components/page/SettingPage/GeneralSettings/SocialContacts';
import StoreDetails from 'src/app/components/page/SettingPage/GeneralSettings/StoreDetails';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

const GeneralSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const [state, setState] = useState('individual');

	//  custom hook
	const { generalSettingsSchema, handelDefaultValue } = useCustomHookGeneralForm(state);

	const handleSubmit = (values: generalSettingsInterface) => {
		console.log(values);
		// handelclose();
	};

	const { formStore, onSubmit } = useForm({
		schema: generalSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<SubHeader title={t('General settings')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='flex-col-top-section-pages container mx-auto'>
					<StoreDetails formStore={formStore} />
					<Media formStore={formStore} />
					<SocialContacts formStore={formStore} />
					<LegalDetails state={state} setState={setState} formStore={formStore} />
					<AdminOrLanguageDefaults
						title={t('Admin defaults (shown to you)')}
						formStore={formStore}
					/>
				</div>

				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
};

export default GeneralSettings;
