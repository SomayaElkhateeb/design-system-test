import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BasicInfo from './BasicInfo/BasicInfo';
import CustomerSegment from './CustomerSegment/CustomerSegment';
import MinimumRequirements from './MinimumRequirements/MinimumRequirements';
import ActiveDates from './ActiveDates/ActiveDates';
import { HeaderSettings, ToggleSwitch } from 'src/app/components/optimized';

import { useDispatch } from 'react-redux';
import { postDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';

const basicInfoSchema = z.object({
	discountName: z.string().min(4, 'Discount name must be at least 3 characters long'),
	fixedAmount: z.number().min(0, 'Fixed amount must be a positive number'),
	minimumPrice: z.number().min(0, 'Minimum price must be a positive number'),
	endDate: z.date().nullable(),
});

const initialValues = {
	discountName: '',
	fixedAmount: '',
	minimumPrice: '',
	endDate: null,
};
const NewDiscount: React.FC = () => {
	const { t } = useTranslation();
	const [state, setState] = useState(initialValues);
	const [validationErrors, setValidationErrors] = useState({});
	let { discountName, fixedAmount, minimumPrice, endDate } = state;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSaveChanges = () => {
		try {
			basicInfoSchema.parse(state);
			const data = {
				name: discountName,
				value: fixedAmount,
				date: endDate,
				sales: minimumPrice,
			};
			dispatch(postDiscounts(data));
			setState(initialValues);
			navigate('/marketing/discounts');
		} catch (error) {
			console.error('Validation error:', error.errors);
			setValidationErrors({
				discountName: error.errors.find((err) => err.path[0] === 'discountName')?.message,
				fixedAmount: error.errors.find((err) => err.path[0] === 'fixedAmount')?.message,
			});
		}
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
					<BasicInfo
						discountName={state.discountName}
						fixedAmount={state.fixedAmount}
						setState={setState}
						validationErrors={validationErrors}
					/>
					<CustomerSegment />
					<MinimumRequirements setState={setState} minimumPrice={minimumPrice} />
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
