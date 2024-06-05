import { useState } from 'react';
import { SearchIcon } from 'src/app/utils/icons';
import { useClickOutsideWithId } from 'src/app/utils';
import PopoverComponenet from '../../page/Customers/Popover';
import Button from '@mui/material/Button';

const SearchBtn = () => {
	return (
		<PopoverComponenet
			button={
				<>
					<Button className='size-[42px] grid place-content-center cursor-pointer'>
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
