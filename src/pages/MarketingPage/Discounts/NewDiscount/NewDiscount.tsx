import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';

import BasicInfo from './BasicInfo/BasicInfo';
import ActiveDates from '../../../../app/components/page/discount/Comp/ActiveDates';
import MinimumRequirements from 'src/app/components/page/discount/Comp/MinimumRequirements';
import CustomerSegment from 'src/app/components/page/discount/Comp/CustomerSegment/CustomerSegment';

import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';

const NewDiscount: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const [state, setState] = useState();

	const handleSaveChanges = () => {
		// try {
		// 	basicInfoSchema.parse(state);

		// const data = {
		// name: discountName,
		// value: fixedAmount,
		// date: endDate,
		// sales: minimumPrice,
		// };
		// dispatch(postDiscounts(data));
		// setState(initialValues);
		navigate('/marketing/discounts');
		// } catch (error) {
		// 	console.error('Validation error:', error.errors);
		// 	setValidationErrors({
		// 		discountName: error.errors.find((err) => err.path[0] === 'discountName')?.message,
		// 		fixedAmount: error.errors.find((err) => err.path[0] === 'fixedAmount')?.message,
		// 	});
		// }
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
					<ActiveDates setState={setState} />
				</div>
				<div className='bg-white w-[277px] h-fit border p-3 border-constrained rounded-md flex flex-col gap-[18px]'>
					<h3 className='text-title font-semibold'>{t('Quick actions')}</h3>
					<ToggleSwitch />
				</div>
			</div>
		</div>
	);
};
export default NewDiscount;
