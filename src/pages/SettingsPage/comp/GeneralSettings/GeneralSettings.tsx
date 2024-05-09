import { z } from 'zod';

import { useTranslation } from 'react-i18next';
// comps
import { HeaderSettings } from 'src/app/components/optimized';
import StoreDetails from './StoreDetails';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import SocialContacts from './SocialContacts';
import AdminDefaults from './AdminDefaults';
import Media from './Media';
import LegalDetails from './LegalDetails';

export interface generalSettingsInterface {
	storeName: string;
	storeEmail: string;
	storeIndustry: string;
	storeContactPhone: string;
	facebook: string;
	instagram: string;
	twitter: string;
	youtube: string;
	defaultTime: string;
	defaultCurrency: string;
	defaultLength: string;
	defaultWeight: string;
	image: File;
	icon: File;
	NationalID: string;
	CommercialRegistrationNo: string;
	CommercialRegistrationImage: File;
}
const generalSettingsSchema = {
	storeName: z.string().min(3, { message: 'Store name is required' }),
	storeEmail: z.string().min(1, { message: 'Store email is required' }).email(),
	storeIndustry: z.string().min(1, { message: 'Store Industry is required' }),
	storeContactPhone: z.string().min(7, { message: 'Store contact phone is required' }),
	defaultTime: z.string().min(1),
	defaultCurrency: z.string().min(1),
	defaultLength: z.string().min(1),
	defaultWeight: z.string().min(1),
	facebook: z
		.string()
		.url()
		.refine((value) => /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Facebook URL',
		}),
	instagram: z
		.string()
		.url()
		.refine((value) => /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Instagram URL',
		}),
	twitter: z
		.string()
		.url()
		.refine((value) => /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Twitter URL',
		}),
	youtube: z
		.string()
		.url()
		.refine((value) => /^https?:\/\/(www\.)?youtube\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid YouTube URL',
		}),
	image: z.instanceof(File),
	icon: z.instanceof(File),
	CommercialRegistrationImage: z.instanceof(File),
	CommercialRegistrationNo: z
		.string()
		.min(5, { message: 'Commercial Registration No  is required' }),
	NationalID: z.string().min(5, { message: 'National ID  is required' }),
};

const GeneralSettings = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: generalSettingsInterface) => {
		console.log(values);
		// handelclose();
	};

	const handelDefaultValue = () => {
		return {
			storeName: '',
			storeEmail: '',
			storeIndustry: '',
			storeContactPhone: '',
			facebook: '',
			instagram: '',
			twitter: '',
			youtube: '',
			image: undefined,
			icon: undefined,
			NationalID: '',
			CommercialRegistrationNo: '',
			CommercialRegistrationImage: undefined,
		};
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
					<LegalDetails formStore={formStore} />
					<AdminDefaults formStore={formStore} />
				</div>
			</form>
		</Form>
	);
};

export default GeneralSettings;
