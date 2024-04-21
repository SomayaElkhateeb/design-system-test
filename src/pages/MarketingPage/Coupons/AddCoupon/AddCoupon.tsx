import React, { useRef, useState } from 'react';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';
import BasicInfo from './BasicInfo/BasicInfo';
import MinimumRequirements from '../../../../app/components/page/discount/Comp/MinimumRequirements';
import Limits from './Limits/Limits';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { useTranslation } from 'react-i18next';
import ActiveDates from 'src/app/components/page/discount/Comp/ActiveDates';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';

const AddCoupon: React.FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [state, setState] = useState();

	const handleSaveChanges = () => {
		// const data = {
		// 	name: discountName,
		// 	value: fixedAmount,
		// 	date: endDate,
		// 	used: used,
		// 	sales: minimumPrice,
		// };
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
					<BasicInfo />
					<CustomerSegment />
					<MinimumRequirements />
					<Limits />
					<ActiveDates setState={setState} />
				</div>
				<div className='bg-white w-[15rem] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[1rem]'>
					<h3 className='text-title font-semibold'>{t('Quick actions')}</h3>
					<ToggleSwitch />
				</div>
			</div>
		</div>
	);
};

export default AddCoupon;
