import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoLogoElectron } from 'react-icons/io5';
import { GiClothes } from 'react-icons/gi';
import { RxHome } from 'react-icons/rx';
import { MdAllInclusive } from 'react-icons/md';

function HeaderSearchBar({ options }) {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
	};

	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className='relative flex items-center w-[600px] h-10 rounded-md border py-6'>
			<input
				className='w-full pl-12 pr-3 py-2 text-sm bg-transparent border border-transparent focus:outline-none '
				placeholder='Search...'
				value={searchTerm}
				onChange={handleInputChange}
			/>

			<span className='absolute left-3 top-3 '>
				<GoSearch
					size={24}
					color='gray'
					style={{ transform: 'rotate(90deg)' }}
				/>
			</span>

			<select
				className='w-xl px-3 py-3 text-sm  border-gray-300 bg-slate-100 focus:outline-none '
				value={selectedCategory}
				onChange={handleCategoryChange}
			>
				<>
					{/* {options.map((option) => option.icon)} */}
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</>
			</select>
			<button
				type='button'
				className='px-4 py-3 rounded-r-md bg-blue-500 text-white  focus:outline-none '
				onClick={handleSearch}
			>
				<span className=' '>
					<GoSearch size={24} style={{ transform: 'rotate(90deg)' }} />
				</span>
			</button>
		</div>
	);
}

HeaderSearchBar.defaultProps = {
	options: [
		{ icon: <MdAllInclusive />, value: 'all', label: 'All Products' },
		{ icon: <IoLogoElectron />, value: 'electronics', label: 'Electronics' },
		{ icon: <GiClothes />, value: 'clothing', label: 'Clothing' },
		{ icon: <RxHome />, value: 'home', label: 'Home & Garden' }
	]
};

export default HeaderSearchBar;
