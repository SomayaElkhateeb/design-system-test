import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookGeneralForm, { generalSettingsInterface } from './HookForGeneralForm';
import StoreDetails from './StoreDetails';
import GeneralSettingsMedia from './GeneralSettingsMedia';
import SocialContacts from './SocialContacts';
import LegalDetails from './LegalDetails';
import AdminOrLanguageDefaults from './AdminOrLanguageDefaults';

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
	console.log(formStore.formState.errors);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global '>
				<SubHeader title={t('General settings')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>

				<div className='custom-grid-parent custom_container'>
					<div className='grid-left'>
						<div className='flex-col-global '>
							<StoreDetails formStore={formStore} />
							<GeneralSettingsMedia formStore={formStore} />
							<SocialContacts formStore={formStore} />
							<LegalDetails state={state} setState={setState} formStore={formStore} />
							<AdminOrLanguageDefaults
								title={t('Admin defaults (shown to you)')}
								formStore={formStore}
							/>
							<SubHeaderMobileBtns onSubmit={onSubmit} />
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
};

export default GeneralSettings;
