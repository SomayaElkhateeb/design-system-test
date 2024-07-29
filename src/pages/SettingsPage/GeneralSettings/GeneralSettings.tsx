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
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { postGeneralSettingsStore } from 'src/app/store/slices/settingsPage/configurations/configurationsAsyncThunks';

const GeneralSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');
	const [state, setState] = useState('individual');

	//  custom hook
	const { generalSettingsSchema, handelDefaultValue } = useCustomHookGeneralForm(state);

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.configurations);

	const handleSubmit = (values: generalSettingsInterface) => {
		console.log(values);
		
		// Assuming `values` already contains `File` objects where necessary
		const customValues = {
			general: {
				settings: {
					store: {
						name: values.general.settings.store.name,
						email: values.general.settings.store.email,
						industry: values.general.settings.store.industry,
						phone: values.general.settings.store.phone,
					},
					media: {
						logo: values.general.settings.media.logo, 
						icon: values.general.settings.media.icon,   
					},
					social: {
						links: {
							facebook: values.general.settings.social.links.facebook,
							instagram: values.general.settings.social.links.instagram,
							twitter: values.general.settings.social.links.twitter,
							youtube: values.general.settings.social.links.youtube,
						}
					},
					legal: {
						type: values.general.settings.legal.type,
						national_id: values.general.settings.legal.national_id,
						national_image: values.general.settings.legal.national_image, 
						commercial_no: values.general.settings.legal.commercial_no,
						commercial_image: values.general.settings.legal.commercial_image, 
					}
				},
			},
			someke: {
				key: values.someke.key,
			}
		};

		dispatch(postGeneralSettingsStore(values)).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				navigate(-1);
			}
	  });
		
		console.log(customValues);
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
							{/* <AdminOrLanguageDefaults
								title={t('Admin defaults (shown to you)')}
								formStore={formStore}
							/> */}
							<SubHeaderMobileBtns onSubmit={onSubmit} />
						</div>
					</div>
				</div>
			</form>
		</Form>
	);
};

export default GeneralSettings;
