import { SearchIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useClickOutsideWithId } from 'src/app/utils';

const SearchBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='seventh-step'>
			<Button onClick={() => setShow(true)}>
				<span className='size-[42px] grid place-content-center'>
					<SearchIcon />
				</span>
			</Button>
			{show && <SearchInput onClose={() => setShow(false)} />}
		</div>
	);
};

export default SearchBtn;

function SearchInput({ onClose }: { onClose: () => void }) {
	const id = 'searchInput';
	useClickOutsideWithId(id, onClose);
	return (
		<div id={id} className='absolute'>
			<input
				className='text-sm p-3 rounded-lg outline-none text-title shadow-md'
				placeholder='Search...'
				// value={searchTerm}
				// onChange={handleInputChange}
			/>
		</div>
	);
}
