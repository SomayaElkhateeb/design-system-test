import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';

import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import BranchAppointments from './BranchAppointments';
import BranchInfo from './BranchInfo';
import useAddBranchForm, { BranchSettingsInterface } from './_hook/useAddBranchForm';

export default function AddBranch(props: {
	hideHeader?: boolean;
	handleSubmit?: (values: BranchSettingsInterface) => void;
}) {
	//  hooks
	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const { t } = useTranslation();

	const handleSubmit = (values: BranchSettingsInterface) => {
		console.log(values);
		// handleClose();
	};

	// custom hook
	const { branchSettingsSchema, handelDefaultValue } = useAddBranchForm(sendGift, selectedOption);
	const { formStore, onSubmit } = useForm({
		schema: branchSettingsSchema,
		handleSubmit: handleSubmit,
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
			<form onSubmit={onSubmit} className='flex-col-global'>
				{/* {!props.hideHeader && ( */}
				<SubHeader title={t('Add Branch')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				{/* )} */}
				<div className='grid gap-5 md:grid-cols-3 custom_container pb-3 '>
					<div className='flex-col-global md:col-span-2'>
						<BranchInfo
							sendGift={sendGift}
							setSendGift={setSendGift}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							formStore={formStore}
						/>
						<BranchAppointments formStore={formStore} />
					</div>
					<div className='col-span-1'>
						{/* <QuickActions data={data} /> */}
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
