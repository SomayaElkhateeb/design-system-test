import { useState, useEffect } from 'react';
import { CheckIcon } from 'src/app/utils/icons';

/**
 * CheckBoxX component for customizable checkbox with optional label.
 * @param {{
 *  variant?: "minus";
 *  label?: import("react").ReactNode;
 *  handleOnChange?: (isChecked: boolean) => void;
 *  checked?: boolean;
 * } & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked">} props - Props for the CheckBoxX component.
 *
 * @example
 *
 * ```jsx
 * export default function ExampleComponent() {
 *   function handleChange(isChecked) {
 *     // Handle checkbox change event
 *     console.log("Checkbox checked:", isChecked);
 *   };
 *
 *   return (
 *     <div>
 *       <CheckBox
 *         initialChecked={true} // Initial state of the checkbox
 *         handleOnChange={handleChange} // Change event handler
 *         label="Example Checkbox" // Optional label
 *       />
 *
 *       <CheckBox
 *         variant="minus" // Specify variant as "minus"
 *         initialChecked={false} // Initial state of the checkbox
 *         handleOnChange={handleChange} // Change event handler
 *         label="Minus Checkbox" // Optional label
 *       />
 *     </div>
 *   );
 * };
 * ```
 */
export default function CheckBox({ variant, label, defaultChecked: initialChecked, handleOnChange, ...props }) {
	const [_isChecked, setIsChecked] = useState(!!props.checked);

	const isChecked = props.checked ?? _isChecked;

	useEffect(() => {
		if (initialChecked !== undefined) {
			setIsChecked(initialChecked);
		}
	}, [initialChecked]);

	function handleToggle() {
		const newValue = !isChecked;
		setIsChecked(newValue);
		if (handleOnChange) {
			handleOnChange(newValue);
			console.log(newValue);
		}
	}

	function renderCheckboxIcon() {
		if (variant === 'minus' && isChecked) {
			return <p className='flex items-center justify-center w-full h-full text-white'>-</p>;
		}

		return <CheckIcon className='w-full h-full fill-white' />;
	}

	return (
		<label className='flex items-center cursor-pointer'>
			<input {...props} type='checkbox' checked={isChecked} onChange={handleToggle} className='hidden' />
			<div
				className={`hover:bg-sec-light w-5 h-5 border rounded ${isChecked ? 'bg-success hover:bg-sec-pressed' : ''}`}
			>
				{renderCheckboxIcon()}
			</div>
			{label && <span className='ml-2 text-sm text-title'>{label}</span>}
		</label>
	);
}
