import { HeaderSettings } from 'src/app/components/optimized';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useNavigate } from 'react-router-dom';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useTranslation } from 'react-i18next';

import QueriesSectionForm from 'src/app/components/page/SettingPage/QueriesSettings/QueriesSection';
import useCustomHookQueriesSettings, { queriesInterface } from 'src/app/components/page/SettingPage/QueriesSettings/HookForQueriesSettings';

export default function QueriesSetting() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// ////////////////////////////////
	// /////////////////////////////////
	const handleSubmit = (values: queriesInterface) => {
		console.log(values);
	};
	// //////////////////////////
	// //////////////////////////

	//  custom hook
	const { QueriesSchema, handelDefaultValue } = useCustomHookQueriesSettings();
	// /////////////
	// /////////////
	const { formStore, onSubmit } = useForm({
		schema: QueriesSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	// ////////////////////////////
	// ///////////////////////////
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
				<div className='custom_container grid lg:grid-cols-3 gap-5'>
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
