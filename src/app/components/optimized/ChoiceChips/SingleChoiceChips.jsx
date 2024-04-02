/** @typedef {string} Option */

/**
 * @param {object} props
 * @param {Option[]} props.options An array of options to display as chips
 * @param {((option: string) => void)} props.setSelected Function to set the selected option
 * @param {Option} props.selected The selected option
 * @param {import('react').ReactNode} props.icon Optional icon component to display with each chip
 * @param {string | undefined} props.type Type of options: 'array' or 'object'
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
 * 			   options={keyValueOptions}
 * 			   setSelected={handleOptionSelect}
 * 			   selected={selectedOption}
 *         icon={<LocationIcon />} // Optional icon
 *       />
 *       <SingleChoiceChips
 * 			   options={keyValueOptions}
 * 			   setSelected={handleOptionSelect}
 * 			   selected={selectedOption}
 *       />
 *    </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
export default function SingleChoiceChips(props) {
	return (
		<div>
			<div className='flex gap-2 p-2'>
				{/* Render each option as a chip */}
				{props.options.map((option, index) => (
					<Chip
						key={index}
						isSelected={option === props.selected}
						icon={props.icon}
						onSelect={props.setSelected}
						value={option}
					/>
				))}
			</div>
		</div>
	);
}

/**
 * @param {object} props
 * @param {string} props.value The value associated with the chip
 * @param {boolean} props.isSelected Boolean indicating whether the chip is selected
 * @param {import('react').ReactNode} props.icon Optional icon component to display with the chip
 * @param {((option: string) => void)} props.onSelect Function to handle chip selection
 */
function Chip(props) {
	// Base styles for the chip
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
				{props.value}
			</span>
		</div>
	);
}

SingleChoiceChips.defaultProps = {
	icon: null,
	type: 'array'
};
