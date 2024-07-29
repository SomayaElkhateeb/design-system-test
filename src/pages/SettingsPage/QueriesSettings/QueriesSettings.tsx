import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
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

	const data = [
		{ id: 1, title: t('Enabled') },

		{ id: 1, title: t('Notify me new queries') },
	];
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Queries')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' grid-left'>
						<QueriesSectionForm formStore={formStore} />
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
