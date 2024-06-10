import { SearchIcon } from 'src/app/utils/icons';

import PopoverComponenet from '../Popover/Popover';
import Button from '@mui/material/Button';

const SearchBtn = () => {
	return (
		<PopoverComponenet
			button={
				<>
					<Button className='roundedParentIcon'>
						<SearchIcon />
					</Button>
				</>
			}
		>
			<SearchInput />
		</PopoverComponenet>
	);
};

export default SearchBtn;

function SearchInput() {
	const id = 'searchInput';

	return (
		<div id={id}>
			<input
				className='text-sm p-3 rounded-lg outline-none text-title shadow-md'
				placeholder='Search...'
				// value={searchTerm}
				// onChange={handleInputChange}
			/>
		</div>
	);
}
