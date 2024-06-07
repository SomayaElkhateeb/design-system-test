import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import BranchAppointments from './BranchAppointments';
import BranchInfo from './BranchInfo';
import useCustomHookAddBranchForm, { BranchSettingsInterface } from './HookForAddBranchForm';

export default function AddBranch(props: {
	hideHeader?: boolean;
	handleSubmit?: (values: BranchSettingsInterface) => void;
}) {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const handleSubmit = (values: BranchSettingsInterface) => {
		console.log(values);
		// handleClose();
	};

	// custom hook
	const { branchSettingsSchema, handelDefaultValue } = useCustomHookAddBranchForm(selectedOption);
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
					<SubHeader title={t('Add Branch')}>
						<Button variant='secondary' onClick={() => navigate(-1)}>
							{t('Discard')}
						</Button>
						<Button variant='primary' onClick={() => {}}>
							{t('Save Changes')}
						</Button>
					</SubHeader>
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
