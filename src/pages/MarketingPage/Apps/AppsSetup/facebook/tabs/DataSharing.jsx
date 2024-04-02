import { useState } from 'react';
import { CheckBox, InputRow, SelectBoxRow } from 'src/app/components/optimized';

const DataSharing = ({ data }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [inputState, setInputState] = useState({
		selectedValue: 'Select an option',
		value: ''
	});

	const { selectedValue, value } = inputState;

	const handleInputChange = (value) => {
		setInputState({ ...inputState, value });
	};

	const handleSelectChange = (value) => {
		setInputState((prevState) => ({
			...prevState,
			selectedValue: value
		}));
	};
	return (
		<div>
			<p className='mb-3 '>
				{data.description} <a href='#'>Learn more</a>
			</p>
			<CheckBox
				label='Activate data sharing'
				onChange={() => setIsChecked(!isChecked)}
			/>

			{isChecked && (
				<div className='flex flex-col w-1/3 space-y-3 '>
					<InputRow
						label='Pixel ID'
						value={inputState.value}
						onChange={(event) => {
							handleInputChange(event.target.value);
						}}
					/>
					<SelectBoxRow
						label='Tracked action'
						selectedValue={selectedValue}
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

export default DataSharing;
