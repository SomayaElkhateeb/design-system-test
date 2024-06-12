import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import useCustomHookReviewSettings, {
	reviewInterface,
} from 'src/app/components/page/SettingPage/ReviewsSettings/HookForReviewSettings';
import ReviewSectionForm from 'src/app/components/page/SettingPage/ReviewsSettings/ReviewSection';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

export default function ReviewsSetting() {
	//  hooks
	const { t } = useTranslation();
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
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Reviews')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-global lg:col-span-2'>
						<ReviewSectionForm formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
