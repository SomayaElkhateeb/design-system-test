import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import SeoSearchSection from './SeoSearchSection';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { Form } from 'src/app/components/ui/form';
import MaintainanceSection from './MaintainanceSection';
import PasswordSection from './PasswordSection';

export interface preferncesInterface {
	pageTitle: string;
	maintainanceEnable: boolean;
	metaDescription: string;
	maintainanceMessageEn: string;
	maintainanceMessageAr: string;
	passwordEnable: boolean;
	password:string
	passwordMessageEn: string;
	passwordMessageAr: string;
}

const pageSchema = () => {
	return {
		pageTitle: z.string().min(3, { message: 'Page title is required' }),

		metaDescription: z.string().min(7, { message: 'Meta description is required' }),
		maintainanceEnable: z.boolean(),
		maintainanceMessageEn: z.string().min(3).max(1000),

		maintainanceMessageAr: z.string().min(3).max(1000),
		passwordEnable: z.boolean(),
		passwordMessageEn: z.string().min(3).max(1000),
		password: z.string().min(3).max(1000),

		passwordMessageAr: z.string().min(3).max(1000),
	};
};
export default function PreferencesPage() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: preferncesInterface) => {
		console.log(values);
		// handelclose();
	};

	const handelDefaultValue = () => {
		return {
			pageTitle: '',

			metaDescription: '',
			maintainanceEnable: false,
			maintainanceMessageEn: '',
			maintainanceMessageAr: '',
			password:'',
			passwordEnable: false,
			passwordMessageEn: '',
			passwordMessageAr: '',
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: pageSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form className='flex-col-top-section-pages gap-[2rem]' onSubmit={onSubmit}>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Store preferences')}
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
				<div className='container mx-auto f grid gap-5 lg:grid-cols-3'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<SeoSearchSection formStore={formStore} />
						<PasswordSection formStore={formStore} />
						<MaintainanceSection formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
}
