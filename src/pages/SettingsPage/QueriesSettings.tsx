import { HeaderSettings } from 'src/app/components/optimized';

import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useTranslation } from 'react-i18next';
import ReviewSectionForm from 'src/app/components/page/SettingPage/ReviewsSettings/ReviewSection';
import QueriesSectionForm from 'src/app/components/page/SettingPage/QueriesSettings/QueriesSection';
export interface queriesInterface {
	describtion_en: string;
	describtion_ar: string;

	enable: boolean;
}

const QueriesSchema = {
	describtion_en: z.string().min(5).max(100),
	describtion_ar: z.string().min(5).max(100),
	enable: z.boolean().default(false),
};
export default function QueriesSetting() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: queriesInterface) => {
		console.log(values);
	};
	const handelDefaultValue = () => {
		return {
			describtion_en: '',
			describtion_ar: '',

			enable: false,
		};
	};

	const { formStore, onSubmit } = useForm({
		schema: QueriesSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{ id: 1, title: t('Enabled') },

		{ id: 1, title: t('Notify me new queries') },
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					variant='settingTwoBtns'
					submit
					title={t('Queries')}
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
				<div className='container mx-auto grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-top-section-pages lg:col-span-2'>
						<QueriesSectionForm formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
