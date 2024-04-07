import React, { useRef } from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import CustomerSegment from './CustomerSegment/CustomerSegment';
import MinimumRequirements from './MinimumRequirements/MinimumRequirements';

// import { useDispatch } from 'react-redux';
// import { postCoupons } from 'src/app/store/slices/marketing/marketingAsyncThunks';

const AddCoupon: React.FC = () => {
	// const dispatch = useDispatch();

	// // Create a ref for the input field
	// const nameRef = useRef(null);

	// const handlePostCoupon = () => {
	// 	if (nameRef.current) {
	// 		console.log(nameRef.current.value);
	// 	} else {
	// 		console.error('Ref is not properly initialized');
	// 	}
	// };

	return (
		<div>
			<HeaderSettings
				variant='settingTwoBtns'
				to={-1}
				title='Add coupon'
				btn1={{ text: 'Discard', onClick: () => {} }}
				btn2={{
					text: 'Save Changes',
					onClick: () => {},
				}}
			/>

			<div className='p-4 flex justify-between gap-[1rem]'>
				<div className='w-full flex flex-col gap-[1rem]'>
					<BasicInfo />
					<CustomerSegment />
					<MinimumRequirements />
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
