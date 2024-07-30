import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import QueriesSectionForm from './QueriesSection';
import useCustomHookQueriesSettings, { QueriesInterface } from './HookForQueriesSettings';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useNavigate } from 'react-router-dom';
import { postQueries } from 'src/app/store/slices/settingsPage/configurations/configurationsAsyncThunks';
import { useEffect } from 'react';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';

export default function QueriesSetting() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	//  custom hook
	const { QueriesSchema, handelDefaultValue } = useCustomHookQueriesSettings();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate } = useAppSelector((state) => state.configurations);

	const handleSubmit = (values: QueriesInterface) => {
		let customValues = {
			queries: {
				automate_replies: {
					enabled: values.queries.automate_replies.enabled,
					reply_description: values.queries.automate_replies.reply_description,
				},
				quick_actions: {
					enabled: values.queries.quick_actions.enabled,
					notify_me_new_query: values.queries.quick_actions.notify_me_new_query,
				},
			},
		};

		console.log(customValues);

		dispatch(postQueries(values)).then((promiseResponse) => {
			if ((promiseResponse.payload.code = 200)) {
				navigate(-1);
			}
		});
	};

	const { formStore, onSubmit } = useForm({
		schema: QueriesSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useEffect(() => {
		formStore.setValue('queries.automate_replies.enabled', formStore.watch('queries.automate_replies.enabled') ? 1 : 0);
	}, [formStore.watch('queries.automate_replies.enabled')]);

	useEffect(() => {
		formStore.setValue('queries.quick_actions.enabled', formStore.watch('queries.quick_actions.enabled') ? 1 : 0);
	}, [formStore.watch('queries.quick_actions.enabled')]);

	useEffect(() => {
		formStore.setValue('queries.quick_actions.notify_me_new_query', formStore.watch('queries.quick_actions.notify_me_new_query') ? 1 : 0);
	}, [formStore.watch('queries.quick_actions.notify_me_new_query')]);



	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Queries')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' grid-left'>
						<QueriesSectionForm formStore={formStore} QueriesSchema={QueriesSchema} />
					</div>
					<div className='grid-right'>
						<div className='global-cards'>
							<h3 className='title'>{t('Quick actions')}</h3>
							<div className='flex-row-global gap-2'>
								<p>{t('Activated')}</p>
								<FormSwitchField<QueriesSchema>
									formStore={formStore}
									name='queries.quick_actions.enabled'
									enable
								/>
								{/* <p>{formStore.watch('queries.quick_actions.enabled') ? 'On' : 'Off'}</p> */}
							</div>

							<div className='flex-row-global gap-2'>
								<p>{t('Activated')}</p>
								<FormSwitchField<QueriesSchema>
									formStore={formStore}
									name='queries.quick_actions.notify_me_new_query'
									enable
								/>
								{/* <p>{formStore.watch('queries.quick_actions.notify_me_new_query') ? 'On' : 'Off'}</p> */}
							</div>
						</div>

					</div>
					<div className='px-5'>
						<SubHeaderMobileBtns onSubmit={onSubmit} />
					</div>
				</div>
			</form>
		</Form>
	);
}



