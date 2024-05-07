import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
// comps
import { HeaderSettings } from 'src/app/components/optimized';
import StoreDetails from './StoreDetails';
import Media from './Media';
import SocialContacts from './SocialContacts';
import LegalDetails from './LegalDetails';
import AdminDefaults from './AdminDefaults';
import InputRowTest from 'src/app/components/optimized/InputsFields/test/InputRowTest';

const generalSchema = z.object({
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
});

type TFormInputs = z.infer<typeof generalSchema>;

const GeneralSettings = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormInputs>({
		mode: 'onBlur',
		resolver: zodResolver(generalSchema),
	});
	const submitForm: SubmitHandler<TFormInputs> = (data) => console.log(data);
	const { t } = useTranslation();

	const handleSaveChangesClick = () => {
		handleSubmit(submitForm)();
	};
	return (
		<>
			<HeaderSettings
				variant='settingTwoBtns'
				to={-1}
				title={t('General settings')}
				btn1={{ text: t('Discard'), onClick: () => {} }}
				btn2={{
					text: t('Save Changes'),
					onClick: handleSaveChangesClick,
				}}
			/>
			<div className='p-4 w-3/4 gap-7 flex flex-col'>
				<StoreDetails register={register} errors={errors} />
				<Media />
				{/* ?? */}
				<SocialContacts register={register} errors={errors} />
				<LegalDetails />
				<AdminDefaults />
			</div>
		</>
	);
};

export default GeneralSettings;
