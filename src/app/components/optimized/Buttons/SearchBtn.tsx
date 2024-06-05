import { useState } from 'react';
import { SearchIcon } from 'src/app/utils/icons';
import { useClickOutsideWithId } from 'src/app/utils';
import PopoverComponenet from '../../page/Customers/Popover';
import Button from '@mui/material/Button';

const SearchBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<PopoverComponenet
			button={
				<>
					<Button
						onClick={() => setShow(true)}
						className='size-[42px] grid place-content-center cursor-pointer'
					>
						<SearchIcon />
					</Button>
				</>
			}
		>
			{show && <SearchInput onClose={() => setShow(false)} />}
		</PopoverComponenet>
	);
};

export default SearchBtn;

function SearchInput({ onClose }: { onClose: () => void }) {
	const id = 'searchInput';
	useClickOutsideWithId(id, onClose);
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
