import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

/**
 * @param {object} props - Props for the InputRow component
 * @param {string} props.label - Label for the input field
 * @param {JSX.Element} props.leftIcon - Icon element to display on the left side of the input
 * @param {JSX.Element} props.rightIcon - Icon element to display on the right side of the input
 * @param {boolean} props.loading - Loading state of the input
 * @param {string} props.error - Error message to display
 * @param {string} props.success - Success message to display
 * @param {string} props.value - Value of the input field
 * @param {(event: import("react").ChangeEvent<HTMLInputElement>) => void} props.onChange - Function to handle input value change
 * @returns {JSX.Element} InputRow component
 */

const InputRow = ({
	label,
	leftIcon,
	rightIcon,
	loading,
	error,
	success,
	value,
	onChange,
	...rest
}) => {
	const [focused, setFocused] = useState(false);

	const handleInputChange = (e) => {
		onChange(e.target.value);
	};

	const getInputClassNames = () => {
		if (focused) {
			return 'border-blue-500';
		} else if (success) {
			return 'border-green-500 bg-gray-50';
		} else if (error) {
			return 'border-red-500 bg-gray-50';
		}
		return 'bg-gray-50 ';
	};

	const classNames = getInputClassNames();

	return (
		<>
			<div className='flex flex-col'>
				<label htmlFor={name} className='block text-sm '>
					{label}
				</label>
				<div
					className={`${classNames} overflow-hidden rounded-md w-full border`}
				>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center p-4 '>
								{leftIcon}
							</div>
						)}
						<input
							className={`${
								leftIcon && 'pl-16'
							} block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none`}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							disabled={loading}
							value={value}
							onChange={handleInputChange}
							{...rest}
						/>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-4'>
								{rightIcon}
							</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>

				{error && !focused && (
					<small className='text-xs text-red-500 '>{error}</small>
				)}
				{success && !focused && (
					<small className='text-xs text-green-500 '>Success</small>
				)}
			</div>
		</>
	);
};

export default InputRow;

/*
How to Use:

Example:
import { FaUser, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const MyComponent = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    // Add your validation logic here
  };

  return (
    <div>
      <InputRow
        label="Username"
        leftIcon={<FaUser />}
        rightIcon={<FaCheckCircle />}
        loading={loading}
        error={error}
        success={success}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Explanation:
- label: The text label displayed above the input field.
- leftIcon: An optional icon to display on the left side of the input field.
- rightIcon: An optional icon to display on the right side of the input field.
- loading: A boolean flag indicating whether the input field is in a loading state.
- error: An optional error message to display below the input field when there is an error.
- success: An optional success message to display below the input field when the input is successful.
- value: The current value of the input field.
- onChange: A callback function to handle changes to the input field value.
*/

// /**
//  * InputRow Component
//  * @param {{
// *    label: string, // Label for the input field
// *    leftIcon: JSX.Element, // Icon element to display on the left side of the input
// *    rightIcon: JSX.Element, // Icon element to display on the right side of the input
// *    loading: boolean, // Loading state of the input
// *    error: string, // Error message to display
// *    success: string, // Success message to display
// *    value: string, // Value of the input field
// *    onChange: (event: import("react").ChangeEvent<HTMLInputElement>) => void, // Function to handle input value change
// * }} props
// * @returns {JSX.Element} InputRow component
// */
