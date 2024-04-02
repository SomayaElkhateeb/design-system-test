import { useState } from 'react';
import SelectBoxRow from '../SelectBoxRow';
import { FiSearch } from 'react-icons/fi';

const SelectBoxTest = () => {
	const [inputState, setInputState] = useState({
		selectedValue: '',
		loading: false,
		error: false,
		success: false
	});

	const { selectedValue, loading, error, success } = inputState;

	/** @param {string} value */
	function handleSelectChange(value) {
		setInputState((prevState) => ({
			...prevState,
			loading: true,
			success: false // Reset success state
		}));

		// Simulating asynchronous operation
		setTimeout(() => {
			// Mocking a successful response
			setInputState((prevState) => ({
				...prevState,
				selectedValue: value,
				loading: false,
				success: true
			}));
		}, 2000); // Simulating a 2-second delay
	}

	return (
		<div>
			<SelectBoxRow
				label='Select an option'
				options={[
					{ value: 'option1', label: 'Option 1' },
					{ value: 'option2', label: 'Option 2' },
					{ value: 'option3', label: 'Option 3' }
				]}
				selectedValue={selectedValue}
				handleSelectChange={handleSelectChange}
				loading={loading}
				error={error}
				success={success}
				leftIcon={<FiSearch />}
				rightIcon={<FiSearch />}
			/>
		</div>
	);
};

export default SelectBoxTest;
