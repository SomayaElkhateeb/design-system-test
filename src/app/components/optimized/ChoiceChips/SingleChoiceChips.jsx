import { useState } from 'react';

/**
 * @typedef {string | { value: string; key: string; }} Option
 */

/**
 * @param {object} props
 * @param {Option[]} props.options An array of options to display as chips
 * @param {((option: string) => void) | (option: { value: string; key: string; }) => void} props.setOption Function to set the selected option
 * @param {import('react').ReactNode} props.icon Optional icon component to display with each chip
 * @param {string} props.type Type of options: 'array' or 'object'
 *
 * @description
 *
 * Usage Example:
 *
 * ```jsx
 * import { useState } from "react";
 * import SingleChoiceChips from "./SingleChoiceChips";
 * import { LocationIcon } from "src/app/utils/icons";
 *
 * const MyComponent = () => {
 *   const [selectedOption, setSelectedOption] = useState("");
 *
 *   const handleOptionSelect = (option) => {
 *     setSelectedOption(option);
 *   };
 *
 *   const simpleOptions = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
 *
 *   const keyValueOptions = [
 *     { key: "Option 1", value: "Value 1" },
 *     { key: "Option 2", value: "Value 2" },
 *     { key: "Option 3", value: "Value 3" },
 *     { key: "Option 4", value: "Value 4" },
 *     { key: "Option 5", value: "Value 5" },
 *   ];
 *
 *   return (
 *     <div>
 *       <SingleChoiceChips
 *         options={simpleOptions}
 *         setOption={handleOptionSelect}
 *         icon={<LocationIcon />} // Optional icon
 *         type="simple"
 *       />
 *       <SingleChoiceChips
 *         options={keyValueOptions}
 *         setOption={handleOptionSelect}
 *         type="keyValue"
 *       />
 *    </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
export default function SingleChoiceChips(props) {
	const [selectedOption, setSelectedOption] = useState('');

	/**
	 * @param {Option} option
	 */
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		props.setOption(option);
	};

	return (
		<div>
			<div className='flex gap-2'>
				{props.options.map((option, index) => (
					<Chip
						key={index}
						label={props.type === 'array' ? option : option.key}
						value={props.type === 'array' ? option : option.value}
						isSelected={
							props.type === 'array'
								? option === selectedOption
								: option.value === selectedOption
						}
						// label={type === 'array' ? option : option.key}
						// isSelected={type === 'array' ? option === selectedOption : option.value === selectedOption}
						icon={props.icon}
						onSelect={handleOptionSelect}
					/>
				))}
			</div>
		</div>
	);
}

/**
 * @param {object} props
 * @param {string} props.label The text label for the chip
 * @param {} props.value The value associated with the chip
 * @param {boolean} props.isSelected Boolean indicating whether the chip is selected
 * @param {import('react').ReactNode} props.icon Optional icon component to display with the chip
 * @param {} props.onSelect Function to handle chip selection
 */
function Chip(props) {
	const baseStyle =
		'flex items-center border p-1 pr-2 w-fit rounded-full cursor-pointer transition-all';
	const notSelectedStyle =
		'bg-white border-border-color text-subtitle hover:bg-gray-100';
	const selectedStyle = 'bg-secondary border-secondary text-white';

	return (
		<div
			className={`${baseStyle} ${
				props.isSelected ? selectedStyle : notSelectedStyle
			}`}
			onClick={() => props.onSelect(props.value)}
		>
			{props.icon && <div className='mr-1'>{props.icon}</div>}
			<span
				className={`paragraph ${
					props.isSelected ? 'text-white' : 'text-subtitle'
				} `}
			>
				{props.label}
			</span>
		</div>
	);
}
