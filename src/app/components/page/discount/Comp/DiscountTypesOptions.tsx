import React, { useState } from 'react';
import InputRow from 'src/app/components/optimized/InputsFields/InputRow';
import { AiOutlinePercentage } from 'react-icons/ai';

interface selectedOptionType {
	discountType: string;
}

const DiscountTypesOptions: React.FC<selectedOptionType> = ({ discountType }) => {
	const [inputState, setInputState] = useState({
		selectedValue: '',
		value: '',
		error: '',
		success: false,
	});

	function handleInputChange(value) {
		setInputState({ ...inputState, value });
		console.log('input value', value);
	}

	const [inputStateFixed, setInputStateFixed] = useState({
		selectedValue: '',
		value: '',
		error: '',
		success: false,
	});

	function handleInputChangeFixed(value) {
		setInputStateFixed({ ...inputState, value });
		console.log('input value', value);
	}

	return (
		<div>
			{discountType === 'Percentage' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						label='Percentage'
						type='number'
						min={0}
						max={100}
						leftIcon={<AiOutlinePercentage />}
						handleOnChange={handleInputChange}
						value={inputState.value}
						error={inputState.error}
						success={inputState.success}
					/>
				</div>
			)}
			{discountType === 'Fixed amount' && (
				<div className='w-[24rem] pt-[1rem]'>
					<InputRow
						label='Fixed amount'
						type='number'
						min={0}
						handleOnChange={handleInputChangeFixed}
						value={inputStateFixed.value}
						error={inputStateFixed.error}
						success={inputStateFixed.success}
					/>
				</div>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
