import { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
const Collapsible = () => {
	const [show, setShow] = useState(false);
	const language = UseLanguage();

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
export default Collapsible;
