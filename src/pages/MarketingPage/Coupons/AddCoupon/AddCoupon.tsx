import React, { useRef, useState } from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import CustomerSegment from './CustomerSegment/CustomerSegment';
import MinimumRequirements from './MinimumRequirements/MinimumRequirements';
import Limits from './Limits/Limits';
import ActiveDates from './ActiveDates/ActiveDates';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';

const initialValues = {
	discountName: '',
	fixedAmount: 0,
	minimumPrice: 0,
	used: 0,
	endDate: null,
};

const AddCoupon: React.FC = () => {
	const [state, setState] = useState(initialValues);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { discountName, fixedAmount, minimumPrice, used, endDate } = state;

	const handleSaveChanges = () => {
		console.log('discountName state:', discountName);
		console.log('fixedAmount state:', fixedAmount);
		console.log('minimumPrice state:', minimumPrice);
		console.log('used state:', used);
		console.log('endDate state:', endDate);
		const data = {
			name: discountName,
			value: fixedAmount,
			date: endDate,
			used: used,
			sales: minimumPrice,
		};
		dispatch(postCoupons(data));
		navigate('/marketing/coupons');
	};

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				to={-1}
				title='Add coupon'
				btn1={{ text: 'Discard', onClick: () => {} }}
				btn2={{
					text: 'Save Changes',
					onClick: handleSaveChanges,
				}}
			/>

			<div className='p-4 flex justify-between gap-[1rem]'>
				<div className='w-full flex flex-col gap-[1rem]'>
					<BasicInfo discountName={discountName} fixedAmount={fixedAmount} setState={setState} />
					<CustomerSegment />
					<MinimumRequirements setState={setState} minimumPrice={minimumPrice} />
					<Limits setState={setState} used={used} />
					<ActiveDates setState={setState} />
				</div>
				<div className='bg-white w-[15rem] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[1rem]'>
					<h3 className='text-title font-semibold'>Quick actions</h3>
					<ToggleSwitch />
				</div>
			</div>
		</div>
	);
};

export default AddCoupon;
