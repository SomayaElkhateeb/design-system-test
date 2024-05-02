import { CheckIcon } from 'src/app/utils/icons';

/**
 * CheckBox component for a customizable checkbox with an optional label.
 * @param {Object} props - Props for the CheckBox component.
 * @param {string} [props.variant] - Variant of the checkbox. Can be "minus".
 * @param {React.ReactNode} [props.label] - Optional label for the checkbox.
 * @param {(isChecked: boolean) => void | null} props.handleOnChange - Function to handle checkbox change event.
 * @param {boolean} props.isChecked - Boolean indicating whether the checkbox is checked.
 * @returns {JSX.Element} - CheckBox component JSX.
 */
/*
	function handleChange(isChecked) {
		console.log("Checkbox checked:", isChecked);
	};

	<CheckBox
	handleOnChange={handleChange} 
	label="Example Checkbox"
	/>

	<CheckBox
	variant="minus" 
	handleOnChange={handleChange} 
	label="Minus Checkbox"
	/>
*/
export default function CheckBox({ variant, label, handleOnChange, ...props }) {
	/**
	 * Render appropriate checkbox icon based on variant and checked state.
	 * @returns {JSX.Element} - Icon JSX.
	 */
	function renderCheckboxIcon() {
		if (variant === 'minus' && props.isChecked) {
			return <p className='flex items-center justify-center w-full h-full text-white'>-</p>;
		}
		return <CheckIcon className='w-full h-full fill-white' />;
	}

	return (
		<label className='flex items-center cursor-pointer'>
			<input
				{...props}
				type='checkbox'
				checked={props.isChecked}
				onChange={(event) => handleOnChange(event.target.checked)}
				className='hidden'
			/>
			<div
				className={`hover:bg-sec-light w-5 h-5 border rounded ${
					props.isChecked ? 'bg-success hover:bg-sec-pressed' : ''
				}`}
			>
				{renderCheckboxIcon()}
			</div>
			{label && <span className='ml-2 text-sm text-title'>{label}</span>}
		</label>
	);
}
