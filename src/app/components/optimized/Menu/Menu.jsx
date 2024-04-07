import { CheckIcon } from 'src/app/utils/icons';

const Menu = ({ options, onSelect, selectedOption }) => {
	
	return (
		<ul className='  rounded  shadow-md py-2 flex flex-col '>
			{options.map((option) => (
				<MenuItem
					key={option.id}
					text={option.text}
					onClick={() => onSelect(option.text)}
					selected={selectedOption === option.text}
				/>
			))}
		</ul>
	);
};
export default Menu;

/**
 * @param {{
 *  options: string[];
 *  onSelect: (option: string) => void;
 *  selectedOption?: string | null;
 * }} props
 */
// export default function Menu(props) {
// 	return (
// 		<ul className='absolute top-[100%] z-10 rounded bg-white shadow-md py-2 flex flex-col w-48 md:w-[341px]'>
// 			{props.options.map((option, index) => (
// 				<MenuItem
// 					key={index}
// 					text={option}
// 					onClick={() => props.onSelect(option)}
// 					selected={props.selectedOption === option}
// 				/>
// 			))}
// 		</ul>
// 	);
// }

/**
 * @param {{
 *  text: string;
 *  onClick: () => void;
 *  selected: boolean;
 * }} props
 */
function MenuItem(props) {
	return (
		<li
			onClick={props.onClick}
			className={`flex text-title justify-between items-center hover:bg-sec-light px-4 py-3 transition-all ${
				props.selected ? 'bg-sec-light' : ''
			}`}
		>
			<span className={`text-sm ${props.selected ? 'text-sec-pressed' : ''}`}>{props.text}</span>
			{props.selected && <CheckIcon className='fill-sec-pressed' />}
		</li>
	);
}
