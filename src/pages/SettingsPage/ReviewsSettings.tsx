import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import useCustomHookReviewSettings, {
	reviewInterface,
} from 'src/app/components/page/SettingPage/ReviewsSettings/HookForReviewSettings';
import ReviewSectionForm from 'src/app/components/page/SettingPage/ReviewsSettings/ReviewSection';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

export default function ReviewsSetting() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSubmit = (values: reviewInterface) => {
		console.log(values);
	};

	// custom hook
	const { ReviewSchema, handelDefaultValue } = useCustomHookReviewSettings();

	const { formStore, onSubmit } = useForm({
		schema: ReviewSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{ id: 1, title: t('Enabled') },
		{ id: 1, title: t('Auto publish reviews') },
		{ id: 1, title: t('Notify me new reviews') },
		{ id: 1, title: t('Net promoter score') },
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<SubHeader title={t('Reviews')}>
					<Button variant='secondary' onClick={() => navigate(-1)}>
						{t('Discard')}
					</Button>
					<Button variant='primary' onClick={() => {}}>
						{t('Save Changes')}
					</Button>
				</SubHeader>
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-top-section-pages lg:col-span-2'>
						<ReviewSectionForm formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
