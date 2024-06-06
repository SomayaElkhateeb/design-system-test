import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import BranchInfo from './BranchInfo';

import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import BranchAppointments from './BranchAppointments';

import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useState } from 'react';
import useCustomHookAddBranchForm, { BranchSettingsInterface } from './HookForAddBranchForm';

export default function AddBranch(props: {
	hideHeader?: boolean;
	handleSubmit?: (values: BranchSettingsInterface) => void;
}) {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');

	// //////////////////////////////////////
	// //////////////////////////
	const handleSubmit = (values: BranchSettingsInterface) => {
		console.log(values);
		// handleClose();
	};

	// /////////////////////////
	//   custom hook

	const { branchSettingsSchema, handelDefaultValue } = useCustomHookAddBranchForm(selectedOption);
	// ///////////////////////

	const { formStore, onSubmit } = useForm({
		schema: branchSettingsSchema,
		handleSubmit: props.handleSubmit || handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [
		{
			id: 1,
			title: t('Assign as main location'),
		},
		{
			id: 2,
			title: t('Show on footer'),
		},
		{
			id: 3,
			title: t('Available for pickup'),
		},
	];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				{!props.hideHeader && (
					<HeaderSettings
						submit
						variant='settingTwoBtns'
						title={t('Add Branch')}
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
				)}
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='flex-col-top-section-pages lg:col-span-2'>
						<BranchInfo
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							formStore={formStore}
						/>
						<BranchAppointments formStore={formStore} />
					</div>
					<div className='col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
