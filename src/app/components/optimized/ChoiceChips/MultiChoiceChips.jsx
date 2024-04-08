import { AddIcon, CheckIcon } from 'src/app/utils/icons';

/**
 * @param {object} props - Props for the MultiChoiceChips component
 * @param {string[]} props.options - Array of options to display as chips
 * @param {(option: string[]) => void} props.setSelected - Function to update the selected options
 * @param {string[]} props.selected - Array of selected options
 *
 * @example
 *
 * ```jsx
 * const Component = () => {
 *   const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
 *   const [selected, setSelected] = useState([]);
 *
 *   return (
 *     <div>
 *       <MultiChoiceChips
 * 			   options={options}
 *         setSelected={setSelected}
 *         selected={selected}
 *       />
 *     </div>
 *   );
 * };
 * ```
 */
export default function MultiChoiceChips(props) {
	// Toggle the selection state of an option
	/** @param {string} option */
	function toggleOption(option) {
		const currentIndex = props.selected.indexOf(option);
		const newSelectedOptions = [...props.options]; // Clone the array to avoid mutation
		if (currentIndex === -1) {
			newSelectedOptions.push(option); // Add option if not already selected
		} else {
			newSelectedOptions.splice(currentIndex, 1); // Remove option if already selected
		}
		props.setSelected(newSelectedOptions);
	}

	return (
		<div>
			<div className='flex flex-wrap gap-2 p-2'>
				{props.options.map((option, index) => (
					<Chip
						key={index}
						label={option}
						isSelected={props.selected.includes(option)}
						handleToggle={() => toggleOption(option)}
					/>
				))}
			</div>
		</div>
	);
}

/**
 * @param {{
 *  label: string;
 *  isSelected: boolean;
 *  handleToggle: () => void;
 * }} props
 */
function Chip(props) {
	const baseStyle = 'py-1 pr-2 flex items-center border w-fit rounded-full cursor-pointer transition-all';
	const notSelectedStyle = 'bg-white border-border-color text-subtitle hover:bg-gray-100';
	const selectedStyle = 'border-sec-pressed text-sec-pressed bg-sec-light';

	return (
		<div className={`${baseStyle} ${props.isSelected ? selectedStyle : notSelectedStyle}`} onClick={props.handleToggle}>
			{props.isSelected ? <CheckIcon className='fill-sec-pressed' /> : <AddIcon className='fill-hint' />}
			<span className={`paragraph ${props.isSelected ? 'text-sec-pressed' : 'text-subtitle'}`}>{props.label}</span>
		</div>
	);
}
