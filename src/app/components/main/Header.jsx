import { useEffect, useState } from 'react';

import { NavIcon } from 'src/app/utils/icons';

// HeaderSearchBar Icon
import { GoSearch } from 'react-icons/go';
import { IoLogoElectron } from 'react-icons/io5';
import { GiClothes } from 'react-icons/gi';
import { RxHome } from 'react-icons/rx';
import { MdAllInclusive } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HelpCenterBtn from '../optimized/Buttons/HelpCenterBtn';
import ViewBtn from '../optimized/Buttons/ViewBtn';
import ChatBtn from '../optimized/Buttons/ChatBtn';
import NotificationBtn from '../optimized/Buttons/NotificationBtn';
import ProfileBtn from '../optimized/Buttons/ProfileBtn';
import HeaderLoading from '../page/SchimmerLoading/HeaderLoading';
const Header = ({ setIsOpen }) => {
	//  hooks
	const [showLoading, setShowLoading] = useState(true);
	const { pathname } = useLocation();
	const { t } = useTranslation();
	let activeModule = '';

	// loading header
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Clear the timer on component unmount
	}, []);
	const modules = [
		{ path: '/', name: t('Home') },
		{ path: 'products', name: t('Products') },
		{ path: 'orders', name: t('Orders') },
		{ path: 'customers', name: t('Customers') },
		{ path: 'analytics', name: t('Analytics') },
		{ path: 'reviews', name: t('Reviews') },
		{ path: 'pages', name: t('Pages') },
		{ path: 'marketing', name: t('Marketing') },
		{ path: 'apps', name: t('Apps') },
		{ path: 'services', name: t('Services') },
		{ path: 'settings', name: t('Settings') },
		{ path: 'store', name: t('Store') },
	];
	modules.forEach((module) => {
		if (pathname.startsWith(`/${module.path}`) || pathname === `${module.path}`) {
			activeModule = module.name;
		}
	});

	//  handel active header
	// const activeModule =
	// 	pathname === '/' ? t('Home') : t(pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2));

	return (
		<>
			{showLoading ? (
				<HeaderLoading />
			) : (
				<div className='h-[70px] px-4 flex justify-between items-center mx-auto bg-white'>
					<div className='flex  items-center gap-3'>
						<button className='max-lg:hidden' onClick={setIsOpen}>
							<NavIcon className='fill-pri-dark' />
						</button>
						<h2 className='title text-lg font-semibold'>{activeModule}</h2>
					</div>
					{/* <HeaderSearchBar /> */}
					<ProfileInfo />
				</div>
			)}
		</>
	);
};

export default Header;

// HeaderSearchBar
function HeaderSearchBar({ options }) {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		// console.log('Searching for:', searchTerm, 'in category:', selectedCategory);
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
				<GoSearch size={24} color='gray' style={{ transform: 'rotate(90deg)' }} />
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
		{ icon: <RxHome />, value: 'home', label: 'Home & Garden' },
	],
};

// ProfileInfo
const ProfileInfo = () => {
	return (
		<div className='flex items-center'>
			<HelpCenterBtn />
			<ViewBtn />
			<ChatBtn />
			<NotificationBtn />
			<ProfileBtn />
		</div>
	);
};

// ====  Old SearchBar ============================
// const SearchBar = () => {
//   return (
//     <form className=" overflow-hidden rounded flex items-center max-lg:hidden">
//       <div className=" border-constrained border flex items-center ">
//         <SearchIcon className="fill-hint mx-2 " />
//         <input
//           type="search"
//           id="search"
//           name="search"
//           className="focus:outline-none px-1 py-2 lg:w-56 xl:w-[315px]  "
//         />
//         <button className="flex items-center self-stretch p-1 px-3 gap-[3px]  bg-constrained  max-xl:hidden ">
//           <BoxIcon className="fill-primary" />
//           <p className="text-primary subtitle">Products</p>
//           <DownIcon className="fill-primary" />
//         </button>
//       </div>

//       <button type="submit" className="bg-primary self-stretch ">
//         <SearchIcon className="fill-white mx-3.5 " />
//       </button>
//     </form>
//   );
// };
