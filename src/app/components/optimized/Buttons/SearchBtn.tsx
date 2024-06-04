import { SearchIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import { useClickOutsideWithId } from 'src/app/utils';

const SearchBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<div className='seventh-step'>
			<p
				className='size-[42px] grid place-content-center relative cursor-pointer'
				onClick={() => setShow(true)}
			>
				<SearchIcon />
			</p>

			{show && <SearchInput onClose={() => setShow(false)} />}
		</div>
	);
};

export default SearchBtn;

function SearchInput({ onClose }: { onClose: () => void }) {
	const id = 'searchInput';
	useClickOutsideWithId(id, onClose);
	return (
		<div id={id} className='absolute right-0'>
			<input
				className='text-sm p-3 rounded-lg outline-none text-title shadow-md'
				placeholder='Search...'
				// value={searchTerm}
				// onChange={handleInputChange}
			/>
		</div>
	);
}
