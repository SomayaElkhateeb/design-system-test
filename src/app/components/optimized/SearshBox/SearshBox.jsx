import { DeleteExitIcon } from 'src/app/utils/icons';
import InputRow from '../InputsFields/InputRow';
import useSearshBox from './useSearshBox';

// how to use
// const handleSelectedOptions = (selectedOptions) => {
//   console.log('Selected options:', selectedOptions);
// };
//  <SearshBox options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} onSelectedOptions={handleSelectedOptions}  />

const SearshBox = ({ options, onSelectedOptions, label }) => {
	const {
		selectedOptions,
		searchTerm,
		showOptions,
		handleInputChange,
		handleOptionClick,
		handleTagRemove,
		handleInputFocus,
		availableOptions,
	} = useSearshBox(options, onSelectedOptions);

	return (
		<div className='relative'>
			<InputRow
				label={label}
				value={searchTerm}
				onChange={handleInputChange}
				onFocus={handleInputFocus}
				placeholder='Search...'
			/>
			{showOptions && (
				<div className='absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg'>
					{availableOptions.map((option, index) => (
						<div
							key={index}
							className='px-4 py-2 cursor-pointer hover:bg-gray-100'
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</div>
					))}
				</div>
			)}
			<div className='flex flex-wrap items-center gap-2'>
				{selectedOptions.map((option, index) => (
					<Tag key={index} label={option} onRemove={() => handleTagRemove(index)} />
				))}
			</div>
		</div>
	);
};
export default SearshBox;

const Tag = ({ label, onRemove }) => {
	return (
		<div className='flex items-center  bg-borders-lines p-1 pl-3 mt-1.5 rounded'>
			<p className='paragraph text-title'>{label}</p>

			<button className='ms-1' onClick={onRemove}>
				<DeleteExitIcon className='fill-hint' />
			</button>
		</div>
	);
};
