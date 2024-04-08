import { useId, useState } from 'react';
import { ClipLoader } from 'react-spinners';

/**
 * @param {{
 *  label?: import("react").ReactNode;
 *  leftIcon?: JSX.Element;
 *  rightIcon?: JSX.Element;
 *  loading?: boolean;
 *  error?: string;
 *  success?: boolean;
 *  value?: string;
 *  handleOnChange?: (value: string) => void;
 * _ref?: any;
 *  options: Array<{ value: string, label: string }>;
 *  selectedValue?: string;
 * } & Omit<import('react').SelectHTMLAttributes<HTMLSelectElement>, "onChange">} props - Props for the SelectBoxRow component
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 * import { useState } from "react";
 * import SelectBoxRow from "./SelectBoxRow";
 *
 * export default function MyComponent() {
 *   const [selectedOption, setSelectedOption] = useState("");
 *
 *   const handleSelectChange = (value) => {
 *     setSelectedOption(value);
 *   };
 *
 *   return (
 *     <div>
 *       <SelectBoxRow
 *         label="Select an option"
 *         options={[
 *           { value: "option1", label: "Option 1" },
 *           { value: "option2", label: "Option 2" },
 *           { value: "option3", label: "Option 3" },
 *         ]}
 *         loading={false}
 *         error={false}
 *         success={false}
 *         selectedValue={selectedOption}
 *         handleSelectChange={handleSelectChange}
 *       />
 *     </div>
 *   );
 * };
 * ```
 */
export default function SelectBoxRow({
	label,
	options,
	loading,
	error,
	success,
	leftIcon,
	rightIcon,
	selectedValue,
	handleOnChange,
	_ref,
	...rest
}) {
	const reactId = useId();
	const controlId = rest.id ?? reactId;
	const [focused, setFocused] = useState(false);

	function getInputClassNames() {
		if (focused && !success) {
			return 'border-blue-500';
		} else if (success) {
			return 'border-green-500 bg-gray-50';
		} else if (error) {
			return 'border-red-500 bg-gray-50';
		}
		return 'bg-gray-50 ';
	}

	const classNames = getInputClassNames();

	return (
		<>
			<div className='flex flex-col'>
				<label htmlFor={controlId} className='block text-sm '>
					{label}
				</label>
				<div className={`${classNames} overflow-hidden rounded-md w-full border`}>
					<div className='relative'>
						{leftIcon && <div className='absolute inset-y-0 left-0 flex items-center p-5 bg-gray-200 '>{leftIcon}</div>}
						<select
							ref={_ref}
							className={`block w-full px-3 py-2 border rounded focus:outline-none border-none outline-none ${
								leftIcon && 'px-16'
							} ${loading && 'appearance-none'}`}
							id={controlId}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							disabled={loading}
							value={selectedValue}
							onChange={handleOnChange && ((event) => handleOnChange(event.target.value))}
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
							<div className='absolute inset-y-0 right-0 flex items-center p-5 bg-gray-200'>{rightIcon}</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>

				{error && !focused && <small className='text-xs text-red-500'>Error</small>}
				{success && !focused && <small className='text-xs text-green-500'>Success</small>}
			</div>
		</>
	);
}
