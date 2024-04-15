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
 * } & Omit<import('react').InputHTMLAttributes<HTMLInputElement>, "onChange">} props - Props for the InputRow component
 *
 * How to Use:
 *
 * Example:
 *
 * ```jsx
 * import { FaUser, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
 *
 * const MyComponent = () => {
 *   const [value, setValue] = useState("");
 *   const [error, setError] = useState("");
 *   const [success, setSuccess] = useState("");
 *   const [loading, setLoading] = useState(false);
 *
 *   return (
 *     <div>
 *       <InputRow
 *         label="Username"
 *         leftIcon={<FaUser />}
 *         rightIcon={<FaCheckCircle />}
 *         loading={loading}
 *         error={error}
 *         success={success}
 *         value={value}
 *         onChange={value => setValue(value)}
 *       />
 *     </div>
 *   );
 * };
 * ```
 *
 * Explanation:
 * - label: The text label displayed above the input field.
 * - leftIcon: An optional icon to display on the left side of the input field.
 * - rightIcon: An optional icon to display on the right side of the input field.
 * - loading: A boolean flag indicating whether the input field is in a loading state.
 * - error: An optional error message to display below the input field when there is an error.
 * - success: An optional success message to display below the input field when the input is successful.
 * - value: The current value of the input field.
 * - handleSelectChange: A function to handle changes to the input field value.
 */

export default function InputRow({
	label,
	leftIcon,
	rightIcon,
	loading,
	error,
	success,
	value,
	handleOnChange,
	_ref,
	...rest
}) {
	const reactId = useId();
	const controlId = rest.id ?? reactId;
	const [focused, setFocused] = useState(false);

	function getInputClassNames() {
		if (focused) {
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
				{label && (
					<label htmlFor={controlId} className='block text-sm mb-1.5'>
						{label}
					</label>
				)}
				<div className={`${classNames} overflow-hidden rounded-md w-full border`}>
					<div className='relative'>
						{leftIcon && <div className='absolute inset-y-0 left-0 flex items-center p-4 '>{leftIcon}</div>}
						<input
							ref={_ref}
							className={`${
								leftIcon && 'pl-16'
							} block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none`}
							onFocus={() => setFocused(true)}
							onBlur={() => setFocused(false)}
							disabled={loading}
							value={value}
							onChange={handleOnChange && ((event) => handleOnChange(event.target.value))}
							{...rest}
							id={controlId}
						/>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-4'>{rightIcon}</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>
				{error && !focused && <small className='text-xs text-red-500 '>{error}</small>}
				{success && !focused && <small className='text-xs text-green-500 '>Success</small>}
			</div>
		</>
	);
}
