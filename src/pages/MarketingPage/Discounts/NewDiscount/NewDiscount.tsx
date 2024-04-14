import React, { useState } from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import CustomerSegment from './CustomerSegment/CustomerSegment';
import MinimumRequirements from './MinimumRequirements/MinimumRequirements';
import ActiveDates from './ActiveDates/ActiveDates';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';

const initialValues = {
	discountName: '',
	fixedAmount: 0,
	minimumPrice: 0,
	endDate: null,
};
const NewDiscount: React.FC = () => {
	const [state, setState] = useState(initialValues);

	let { discountName, fixedAmount, minimumPrice, endDate } = state;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSaveChanges = () => {
		console.log('discountName state:', discountName);
		console.log('fixedAmount state:', fixedAmount);
		console.log('minimumPrice state:', minimumPrice);
		console.log('endDate state:', endDate);
		const data = {
			name: discountName,
			value: fixedAmount,
			date: endDate,
			sales: minimumPrice,
		};
		dispatch(postDiscounts(data));

		discountName = '';
		fixedAmount = 0;
		minimumPrice = 0;
		endDate = null;

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
					<BasicInfo discountName={discountName} fixedAmount={fixedAmount} setState={setState} />
					<CustomerSegment />
					<MinimumRequirements setState={setState} minimumPrice={minimumPrice} />
					<ActiveDates setState={setState} />
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
