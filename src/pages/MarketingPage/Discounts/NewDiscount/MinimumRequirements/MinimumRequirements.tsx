import React, { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { minimumRequirementsOptions } from '../comp/data';
import { CheckBox, InputRow } from 'src/app/components/optimized';

interface State {
	selectedMinimumRequirements: string;
	isChecked: boolean;
	minimumQuantity: number;
}

const initialState: State = {
	selectedMinimumRequirements: '',
	isChecked: false,
	minimumQuantity: 0,
};

const MinimumRequirements: React.FC = ({ minimumPrice, setState }) => {
	const [updateState, setUpdateState] = useState<State>(initialState);
	const { selectedMinimumRequirements, isChecked, minimumQuantity } = updateState;

	// Update state
	const update = (newValue: Partial<State>) => {
		setUpdateState((prevState) => ({
			...prevState,
			...newValue,
		}));
	};

	const handleCheckboxChange = (newValue: boolean) => {
		update({ isChecked: newValue });
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newMinimumPrice = Math.max(parseInt(e.target.value), 0);
		setState((prevState) => ({
			...prevState,
			minimumPrice: newMinimumPrice,
		}));
	};

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>Minimum requirements</h3>

			<CheckBox label='define minimum requirements' handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					selected={selectedMinimumRequirements}
					setSelected={(option: string) => update({ selectedMinimumRequirements: option })}
				/>
			)}

			{selectedMinimumRequirements === 'Minimum price' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow label='Mini purchase price' type='number' value={minimumPrice} onChange={handleChange} />
				</div>
			)}
			{selectedMinimumRequirements === 'Minimum quantity' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						label='Mini purchase quantity'
						type='number'
						value={minimumQuantity}
						onChange={(e) => update({ minimumQuantity: Number(e.target.value) })}
					/>
				</div>
			)}
		</section>
	);
};

export default MinimumRequirements;