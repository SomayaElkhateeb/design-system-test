import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookReviewSettings, { reviewInterface } from './HookForReviewSettings';
import ReviewSectionForm from './ReviewSection';

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
				<div className='custom_container custom-grid-parent'>
					<div className=' grid-left'>
						<ReviewSectionForm formStore={formStore} />
					</div>
					<div className='grid-right'>
						<QuickActions data={data} />
					</div>
				</div>
				<div className='px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
