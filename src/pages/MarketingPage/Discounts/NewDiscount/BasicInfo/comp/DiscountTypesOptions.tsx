import React, { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import { AiOutlinePercentage } from 'react-icons/ai';

interface selectedOptionType {
	discountType: string;
	discount: number;
}

const DiscountTypesOptions: React.FC<selectedOptionType> = ({ discountType, discount }) => {
	const [state, setState] = useState({
		amountPercentage: 0,
		amountFixed: 0,
	});
	// Destructure amountPercentage from state
	const { amountPercentage, amountFixed } = state;

	console.log('amountPercentage', state.amountPercentage);
	console.log('amountFixed', state.amountFixed);

	// Update state
	const updateState = (newValue) => {
		setState((prevState) => ({
			...prevState,
			...newValue,
		}));
	};

	// Function to handle amount percentage
	const handleAmountPercentage = (value) => {
		updateState({ amountPercentage: Math.min(Math.max(value, 0), 100) });
	};

	// Function to handle amount fixed
	const handleAmountFixed = (value) => {
		updateState({ amountFixed: Math.max(value, 0) });
	};

	return (
		<div>
			{discountType === 'Percentage' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						label='Percentage'
						leftIcon={<AiOutlinePercentage />}
						type='number'
						value={amountPercentage} // Use amountPercentage from state
						onChange={(e) => handleAmountPercentage(Number(e.target.value))}
					/>
				</div>
			)}
			{discountType === 'Fixed amount' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						ref={discount}
						label='Fixed amount'
						type='number'
						value={amountFixed} // Use amountFixed from state
						onChange={(e) => handleAmountFixed(Number(e.target.value))}
					/>
				</div>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
