import { useTranslation } from 'react-i18next';

import { HeaderSettings } from 'src/app/components/optimized';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useState } from 'react';
import SocialContacts from 'src/app/components/page/SettingPage/GeneralSettings/SocialContacts';
import StoreDetails from 'src/app/components/page/SettingPage/GeneralSettings/StoreDetails';
import Media from 'src/app/components/page/SettingPage/GeneralSettings/Media';
import LegalDetails from 'src/app/components/page/SettingPage/GeneralSettings/LegalDetails';
import AdminOrLanguageDefaults from 'src/app/components/page/SettingPage/GeneralSettings/AdminOrLanguageDefaults';
import useCustomHookGeneralForm, {
	generalSettingsInterface,
} from 'src/app/components/page/SettingPage/GeneralSettings/HookForGeneralForm';

const GeneralSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

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
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('General settings')}
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
					<StoreDetails formStore={formStore} />
					<Media formStore={formStore} />
					<SocialContacts formStore={formStore} />
					<LegalDetails state={state} setState={setState} formStore={formStore} />
					<AdminOrLanguageDefaults
						title={t('Admin defaults (shown to you)')}
						formStore={formStore}
					/>
				</div>
			</form>
		</Form>
	);
};

export default GeneralSettings;
