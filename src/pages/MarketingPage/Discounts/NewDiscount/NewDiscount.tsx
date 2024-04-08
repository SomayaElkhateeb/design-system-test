import React from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import CustomerSegment from './CustomerSegment/CustomerSegment';
import MinimumRequirements from './MinimumRequirements/MinimumRequirements';
import ActiveDates from './ActiveDates/ActiveDates';
import { useNavigate } from 'react-router-dom';

const NewDiscount: React.FC = () => {
	const navigate = useNavigate();

	const handleSaveChanges = () => {
		navigate('/marketing/discounts');
	};

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				to={-1}
				title='Add Discount'
				btn1={{ text: 'Discard', onClick: () => {} }}
				btn2={{ text: 'Save Changes', onClick: handleSaveChanges }}
			/>
			<div className='p-4 flex justify-between gap-7'>
				<div className='w-full flex flex-col gap-[18px]'>
					<BasicInfo />
					<CustomerSegment />
					<MinimumRequirements />
					<ActiveDates />
				</div>
				<div className='bg-white w-[277px] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[18px]'>
					<h3 className='text-title font-semibold'>Quick actions</h3>
					<ToggleSwitch />
				</div>
			</div>
		</div>
	);
};

export default NewDiscount;
