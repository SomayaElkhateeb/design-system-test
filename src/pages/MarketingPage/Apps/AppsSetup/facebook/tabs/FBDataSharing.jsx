import { useState } from 'react';
import { CheckBox, InputRow, SelectBoxRow } from 'src/app/components/optimized';

const FBDataSharing = ({ data }) => {
	const [state, setState] = useState({
		isChecked: false,
		inputState: {
			selectedValue: 'Select an option',
			value: ''
		}
	});

	const { isChecked, inputState } = state;

	const handleInputChange = (value) => {
		setState((prevState) => ({
			...prevState,
			inputState: { ...prevState.inputState, value }
		}));
	};

	const handleSelectChange = (value) => {
		setState((prevState) => ({
			...prevState,
			inputState: { ...prevState.inputState, selectedValue: value }
		}));
	};

	return (
		<div>
			<p className='mb-3 '>
				{data.description} <a href='#'>Learn more</a>
			</p>
			<CheckBox
				label='Activate data sharing'
				onChange={() =>
					setState((prevState) => ({
						...prevState,
						isChecked: !prevState.isChecked
					}))
				}
			/>

			{isChecked && (
				<div className='flex flex-col w-1/3 space-y-3 '>
					<InputRow
						label='Pixel ID'
						value={inputState.value}
						onChange={handleInputChange}
					/>
					<SelectBoxRow
						label='Tracked action'
						selectedValue={inputState.selectedValue}
						handleSelectChange={handleSelectChange}
						options={[
							{ value: 'option1', label: 'Option 1' },
							{ value: 'option2', label: 'Option 2' },
							{ value: 'option3', label: 'Option 3' }
						]}
					/>
				</div>
			)}
		</div>
	);
};

export default FBDataSharing;
