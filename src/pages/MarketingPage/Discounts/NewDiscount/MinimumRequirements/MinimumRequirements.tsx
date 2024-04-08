import React, { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { minimumRequirementsOptions } from '../comp/data';
import { CheckBox, InputRow } from 'src/app/components/optimized';

interface State {
	selectedMinimumRequirements: string;
	isChecked: boolean;
	minimumPrice: number;
	minimumQuantity: number;
}

const initialState: State = {
	selectedMinimumRequirements: '',
	isChecked: false,
	minimumPrice: 0,
	minimumQuantity: 0,
};

const MinimumRequirements: React.FC = () => {
	const [state, setState] = useState<State>(initialState);
	const { selectedMinimumRequirements, isChecked, minimumPrice, minimumQuantity } = state;

	// Update state
	const updateState = (newValue: Partial<State>) => {
		setState((prevState) => ({
			...prevState,
			...newValue,
		}));
	};

	const handleCheckboxChange = (newValue: boolean) => {
		updateState({ isChecked: newValue });
	};

	// Function to handle amount fixed
	const handleAmountFixed = (value: number) => {
		updateState({ minimumPrice: Math.max(value, 0) });
	};

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>Minimum requirements</h3>

			<CheckBox label='define minimum requirements' handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					selected={selectedMinimumRequirements}
					setSelected={(option: string) => updateState({ selectedMinimumRequirements: option })}
				/>
			)}

			{selectedMinimumRequirements === 'Minimum price' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						label='Mini purchase price'
						type='number'
						value={minimumPrice}
						onChange={(e) => handleAmountFixed(Number(e.target.value))}
					/>
				</div>
			)}
			{selectedMinimumRequirements === 'Minimum quantity' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						label='Mini purchase quantity'
						type='number'
						value={minimumQuantity}
						onChange={(e) => updateState({ minimumQuantity: Number(e.target.value) })}
					/>
				</div>
			)}
		</section>
	);
};

export default MinimumRequirements;
