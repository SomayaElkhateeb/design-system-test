import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import useCustomHookQueriesSettings, {
	queriesInterface,
} from 'src/app/components/page/SettingPage/QueriesSettings/HookForQueriesSettings';
import QueriesSectionForm from 'src/app/components/page/SettingPage/QueriesSettings/QueriesSection';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';

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
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<SubHeader title={t('Queries')}>
					<SubHeaderDefaultBtns onSubmit={() => alert('Submit')} />
				</SubHeader>
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
					<div className=' flex-col-top-section-pages lg:col-span-2'>
						<QueriesSectionForm formStore={formStore} />
					</div>
					<div className='lg:col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={() => alert('Submit')} />
			</form>
		</Form>
	);
}
