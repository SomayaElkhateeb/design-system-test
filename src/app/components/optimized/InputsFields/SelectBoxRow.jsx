import { useState } from 'react';
import { ClipLoader } from 'react-spinners';

/**
 * @param {object} props - Props for the SelectBoxRow component
 * @param {string} props.label - The label for the select box
 * @param {Array<{ value: string, label: string }>} props.options - An array of objects representing the options for the select box
 * @param {boolean} props.loading - Boolean indicating whether the select box is in a loading state
 * @param {boolean} props.error - Boolean indicating whether there is an error
 * @param {boolean} props.success - Boolean indicating whether the operation was successful
 * @param {JSX.Element} props.leftIcon - Optional icon component to be displayed on the left side of the select box
 * @param {JSX.Element} props.rightIcon - Optional icon component to be displayed on the right side of the select box
 * @param {string} props.selectedValue - The currently selected value
 * @param {Function} props.handleSelectChange - Handler function to update the selected value
 * @param {object} props.rest - Additional props to pass to the select element
 */

const SelectBoxRow = ({
	label,
	options,
	loading,
	error,
	success,
	leftIcon,
	rightIcon,
	selectedValue,
	handleSelectChange,
	...rest
}) => {
	const [focused, setFocused] = useState(false);
	const getInputClassNames = () => {
		if (focused && !success) {
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
				<label htmlFor={rest.name} className='block text-sm '>
					{label}
				</label>
				<div
					className={`${classNames} overflow-hidden rounded-md w-full border`}
				>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center  p-5 bg-gray-200 '>
								{leftIcon}
							</div>
						)}
						<select
							className={`block w-full px-3 py-2 border rounded focus:outline-none border-none outline-none ${
								leftIcon && 'px-16'
							} ${loading && 'appearance-none'}`}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							disabled={loading}
							value={selectedValue}
							onChange={(e) => handleSelectChange(e.target.value)}
							{...rest}
						>
							<option disabled value=''>
								{selectedValue}
							</option>
							{options?.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-5 bg-gray-200'>
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
					<small className='text-red-500 text-xs'>Error</small>
				)}
				{success && !focused && (
					<small className='text-green-500 text-xs'>Success</small>
				)}
			</div>
		</>
	);
};

export default SelectBoxRow;

// Default props
SelectBoxRow.defaultProps = {
	options: [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	]
};

/*
  Usage Example:

  import { useState } from "react";
  import SelectBoxRow from "./SelectBoxRow";

  const MyComponent = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (value) => {
      setSelectedOption(value);
    };

    return (
      <div>
        <SelectBoxRow
          label="Select an option"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
          loading={false}
          error={false}
          success={false}
          selectedValue={selectedOption}
          handleSelectChange={handleSelectChange}
        />
      </div>
    );
  };

  export default MyComponent;
*/
