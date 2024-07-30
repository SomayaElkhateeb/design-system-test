import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookReviewSettings, { ReviewInterface } from './_hook/HookForReviewSettings';
import ReviewSectionForm from './ReviewSection';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { postReview } from 'src/app/store/slices/settingsPage/configurations/configurationsAsyncThunks';
import { useEffect } from 'react';

export default function ReviewsSetting() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.configurations);

	// custom hook
	const { reviewSchema, handelDefaultValue } = useCustomHookReviewSettings();

	const handleSubmit = (values: ReviewInterface) => {
		dispatch(postReview(values)).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				navigate(-1);
			}
		});
	};

	const { formStore, onSubmit } = useForm({
		schema: reviewSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	
	useEffect(() => {
		formStore.setValue(
			'reviews.quick_actions.enabled',
			formStore.watch('reviews.quick_actions.enabled') ? 1 : 0,
		);
	}, [formStore.watch('reviews.quick_actions.enabled')]);
	useEffect(() => {
		formStore.setValue(
			'reviews.quick_actions.auto_publish_review',
			formStore.watch('reviews.quick_actions.auto_publish_review') ? 1 : 0,
		);
	}, [formStore.watch('reviews.quick_actions.auto_publish_review')]);
	useEffect(() => {
		formStore.setValue(
			'reviews.quick_actions.notify_me_new_review',
			formStore.watch('reviews.quick_actions.notify_me_new_review') ? 1 : 0,
		);
	}, [formStore.watch('reviews.quick_actions.notify_me_new_review')]);
	useEffect(() => {
		formStore.setValue(
			'reviews.quick_actions.net_promoter_score',
			formStore.watch('reviews.quick_actions.net_promoter_score') ? 1 : 0,
		);
	}, [formStore.watch('reviews.quick_actions.net_promoter_score')]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Reviews')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' grid-left'>
						<ReviewSectionForm formStore={formStore} />
					</div>
					{/* quick actions */}
					<div className='grid-right'>
						<div className='global-cards'>
							<h3 className='title'>{t('Quick actions')}</h3>
							<div className='flex-row-global gap-2'>
								<p>{t('Enabled')}</p>
								<FormSwitchField<reviewSchema>
									formStore={formStore}
									name='reviews.quick_actions.enabled'
									enable
								/>
							</div>

							<div className='flex-row-global gap-2'>
								<p>{t('Auto publish reviews')}</p>
								<FormSwitchField<reviewSchema>
									formStore={formStore}
									name='reviews.quick_actions.auto_publish_review'
									enable
								/>
							</div>

							<div className='flex-row-global gap-2'>
								<p>{t('Notify me new reviews')}</p>
								<FormSwitchField<reviewSchema>
									formStore={formStore}
									name='reviews.quick_actions.notify_me_new_review'
									enable
								/>
							</div>

							<div className='flex-row-global gap-2'>
								<p>{t('Net promoter score')}</p>
								<FormSwitchField<reviewSchema>
									formStore={formStore}
									name='reviews.quick_actions.net_promoter_score'
									enable
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
