import { z } from 'zod';

import { useTranslation } from 'react-i18next';
// comps
import { HeaderSettings } from 'src/app/components/optimized';
import StoreDetails from './StoreDetails';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';

export interface generalSettingsInterface {
	storeName: string;
	storeEmail: string;
	storeIndustry: string;
	storeContactPhone: string;
	facebook: string;
	instagram: string;
	twitter: string;
	youtube: string;
}
const generalSettingsSchema = {
	storeName: z.string().min(3, { message: 'Store name is required' }),
	storeEmail: z.string().min(1, { message: 'Store email is required' }).email(),
	storeIndustry: z.string(),
	storeContactPhone: z.string().min(7, { message: 'Store contact phone is required' }),
	facebook: z
		.string()
		.refine((value) => /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Facebook URL',
		}),
	instagram: z
		.string()
		.refine((value) => /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Instagram URL',
		}),
	twitter: z
		.string()
		.refine((value) => /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid Twitter URL',
		}),
	youtube: z
		.string()
		.refine((value) => /^https?:\/\/(www\.)?youtube\.com\/[a-zA-Z0-9._]+$/.test(value), {
			message: 'Invalid YouTube URL',
		}),
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
		};
	};
	const { formStore, onSubmit } = useForm({
		schema: generalSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages container mx-auto'>
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
				<div className='flex-col-top-section-pages'>
					<StoreDetails formStore={formStore} />
				</div>
			</form>
		</Form>
	);
};

export default GeneralSettings;
