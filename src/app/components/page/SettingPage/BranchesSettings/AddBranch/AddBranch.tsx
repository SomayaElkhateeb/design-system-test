import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import BranchInfo from './BranchInfo';
import { z } from 'zod';

import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import BranchAppointments from './BranchAppointments';

import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useState } from 'react';

export interface BranchSettingsInterface {
	branchType: string;
	branchNameEn: string;
	branchNameAr: string;
	countryName?: string;
	cityName?: string;
	area?: string;
	street?: string;
	building: string;
	landmark?: string;
	branchPhoneNumber: string;
}

export default function AddBranch() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const handleSubmit = (values: BranchSettingsInterface) => {
		console.log(values);
		// handleClose();
	};
	const RequiredAddresseData = z.string().min(1);
	const handel_RequiredAddresseData = () => {
		return selectedOption !== 'Add manually'
			? z.optional(RequiredAddresseData).or(z.literal(''))
			: RequiredAddresseData;
	};

	const generalSettingsSchema = {
		branchType: RequiredAddresseData,
		branchNameEn: RequiredAddresseData,
		branchNameAr: RequiredAddresseData,
		countryName: handel_RequiredAddresseData(),
		cityName: handel_RequiredAddresseData(),
		area: handel_RequiredAddresseData(),
		street: handel_RequiredAddresseData(),
		building: RequiredAddresseData,
		landmark: handel_RequiredAddresseData(),
		branchPhoneNumber: z.string().min(7),
	};
	const handelDefaultValue = () => {
		return {
			branchType: 'Warehouse',
			branchNameAr: '',
			branchNameEn: '',
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			branchPhoneNumber: '',
		};
	};
	const { formStore, onSubmit } = useForm({
		schema: generalSettingsSchema,
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
			<form onSubmit={onSubmit}>
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
				<div className='grid gap-5 p-5 grid-cols-3'>
					<div className='grid gap-5 col-span-2 lg:col-span-2'>
						<BranchInfo
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							formStore={formStore}
						/>
						<BranchAppointments />
					</div>
					<div className='col-span-1'>
						{/* <BranchQuickActions /> */}
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
