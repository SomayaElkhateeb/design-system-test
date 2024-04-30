import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';
import { CopyIcon, LogoutIcon, Person } from 'src/app/utils/icons';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoCloseCircleOutline } from 'react-icons/io5';
import MenuSelect from '../Menu/MenuSelect';
const ManageAccountCard = ({ onClose }: { onClose: () => void }) => {
	const language = UseLanguage();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const card = document.getElementById('ManageAccount-card');
			if (card && !card.contains(event.target as Node)) {
				onClose();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);
	return (
		<div
			id='ManageAccount-card'
			className={`bg-white w-80 pt-3 pb-5 absolute shadow-lg top-[4.5rem] ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-2'
					: 'rounded-tl-md rounded-bl-md right-2'
			} `}
		>
			<div className='p-4 flex justify-between items-center'>
				<div className='flex gap-3 items-center'>
					<Person />
					<h2 className='text-sm text-title'>Manage account</h2>
				</div>
				<IoCloseCircleOutline onClick={onClose} className='text-lg cursor-pointer' />
			</div>
			<hr />

			<div className='flex justify-between p-4'>
				<h3 className='font-semibold text-title text-sm'>Stores</h3>
				<IoAddCircle size={18} className='cursor-pointer text-title' />
			</div>

			<CopyableSection content='content------------' />

			<hr />
			<Collapsible />

			<hr />
			<CollapsibleSection />

			<hr />
			<div className='p-4 text-title'>
				<div className='flex gap-3 items-center'>
					<LogoutIcon />
					<h3 className='cursor-pointer'>Sign Out</h3>
				</div>
			</div>
		</div>
	);
};

export default ManageAccountCard;

// CollapsibleSection
const CollapsibleSection = () => {
	const [show, setShow] = useState(false);
	const language = UseLanguage();

	const handelLanguage = () => {
		if (language === 'ar') {
			window.location.reload();
			localStorage.setItem('language', 'en');
		} else {
			window.location.reload();
			localStorage.setItem('language', 'ar');
		}
	};
	const sortMenus = [
		{
			id: 1,
			text: language === 'ar' ? 'English' : 'العربيه',
			onClick: handelLanguage,
		},
	];
	return (
		<div className='flex justify-between p-4 relative'>
			<div className='flex gap-3 items-center text-title'>
				<TfiWorld size={24} />
				<h3>{language === 'ar' ? 'العربيه' : 'English'}</h3>
			</div>
			{language === 'ar' ? (
				<FaAngleLeft onClick={() => setShow(true)} className='cursor-pointer' />
			) : (
				<FaAngleRight onClick={() => setShow(true)} className='cursor-pointer' />
			)}
			{show && <MenuSelect options={sortMenus} />}
		</div>
	);
};

// Collapsible
const Collapsible = () => {
	const [show, setShow] = useState(false);
	const language = UseLanguage();
	// const sortMenus = [
	// 	{
	// 		id: 1,
	// 		text: 'Today',
	// 		onClick: () => console.log('Today'),
	// 		icon: <FaAngleLeft />,
	// 	},
	// 	{ id: 2, text: 'Last week', onClick: () => console.log('Last week') },
	// ];
	return (
		<div className='flex justify-between items-center p-4 relative'>
			<div>
				<h3 className='text-title'>Rasma</h3>
				<p className='text-sm text-subtitle'>Rasma.dookan.net</p>
			</div>
			{language === 'ar' ? (
				<FaAngleLeft onClick={() => setShow(true)} className='cursor-pointer' />
			) : (
				<FaAngleRight onClick={() => setShow(true)} className='cursor-pointer' />
			)}
			{/* {show && <MenuOption options={sortMenus} />} */}
		</div>
	);
};

// CopyableSection
const CopyableSection = ({ content }) => {
	const [isCopied, setCopied] = useState(false);
	const [copiedContent, setCopiedContent] = useState('');

	useEffect(() => {}, [copiedContent]);

	const handleCopy = () => {
		setCopied(true);
		setCopiedContent(content);
		// You can add additional logic here when the content is copied.
	};

	return (
		<div className='flex px-4 pb-4 justify-between items-center'>
			<div>
				<h3 className='text-sm text-title'>Fan Al Taalouq</h3>
				<p className='text-sm text-subtitle'>FanAlTaalouq.dookan.net</p>
			</div>
			{isCopied ? (
				<div className='text-xs text-subtitle'>Copied</div>
			) : (
				<button onClick={() => handleCopy(content)}>
					<CopyIcon className='text-title' />
				</button>
			)}
		</div>
	);
};
