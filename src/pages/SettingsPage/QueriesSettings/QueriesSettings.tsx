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
import useCustomHookQueriesSettings, { queriesInterface } from './HookForQueriesSettings';

export default function QueriesSetting() {
	//  hooks
	const { t } = useTranslation();

	const handleSubmit = (values: queriesInterface) => {
		console.log(values);
	};

	//  custom hook
	const { QueriesSchema, handelDefaultValue } = useCustomHookQueriesSettings();

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
