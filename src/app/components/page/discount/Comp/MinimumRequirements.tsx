import React, { useState } from 'react';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { CheckBox, InputRow } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();
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

	const [inputStatePrice, setInputStatePrice] = useState({
		selectedValue: '',
		value: '',
		error: '',
		success: false,
	});

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

	function handleInputChangePrice(value) {
		setInputStatePrice({ ...inputStatePrice, value });
		console.log('input value', value);
	}

	const minimumRequirementsOptions = [t('Minimum price'), t('Minimum quantity')].map((option) => option);

	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold'>{t('Minimum requirements')}</h3>

			<CheckBox label={t('define minimum requirements')} handleOnChange={handleCheckboxChange} />

			{isChecked && (
				<SingleChoiceChips
					options={minimumRequirementsOptions}
					selected={selectedMinimumRequirements}
					setSelected={(option: string) => update({ selectedMinimumRequirements: option })}
				/>
			)}

			{selectedMinimumRequirements === 'Minimum price' && (
				<div className='w-[390px]'>
					<InputRow
						label={t('Mini purchase price')}
						type='number'
						min={0}
						handleOnChange={handleInputChangePrice}
						value={inputStatePrice.value}
						error={inputStatePrice.error}
						success={inputStatePrice.success}
					/>
				</div>
			)}
			{selectedMinimumRequirements === 'Minimum quantity' && (
				<div className='w-[390px]'>
					<InputRow
						label={t('Mini purchase quantity')}
						type='number'
						min={0}
						handleOnChange={handleInputChange}
						value={inputState.value}
						error={inputState.error}
						success={inputState.success}
					/>
				</div>
			)}
		</section>
	);
};

export default MinimumRequirements;
