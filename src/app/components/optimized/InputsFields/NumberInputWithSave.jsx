import React, { useState } from 'react';
import Button from '../Buttons/Button';

/**
 * A component that allows the user to input a number and save it.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the number input.
 * @param {number} [props.initialState=0] - The initial value for the number input.
 * @param {function} props.onSave - The function to call when the number is saved.
 * @returns {JSX.Element} The rendered component.
 */

function NumberInputWithSave({ label, initialState = 0, onSave }) {
	const [number, setNumber] = useState(initialState);

	/**
	 * Handles changes in the number input.
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
	 */
	const handleChange = (event) => {
		const value = parseFloat(event.target.value);
		if (!isNaN(value)) {
			setNumber(value);
		}
	};

	const handleSave = () => {
		onSave(number); // Pass the current number to the onSave function
	};

	return (
		<div className='flex flex-col'>
			<label htmlFor='number-input' className='mb-2 text-sm font-medium'>
				{label}
			</label>
			<div className='flex items-center'>
				<input
					id='number-input'
					type='number'
					className='px-3 py-[6px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500'
					value={number}
					onChange={handleChange}
				/>
				<Button onClick={handleSave}>Save</Button>
			</div>
		</div>
	);
}

export default NumberInputWithSave;

// Example usage:
/*
    <NumberInputWithSave
    label="Enter Quantity"
    onSave={(number) => alert(`The quantity entered is: ${number}`)}
    />
 */
