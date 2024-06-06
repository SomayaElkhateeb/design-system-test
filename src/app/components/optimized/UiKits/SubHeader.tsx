import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { useNavigate } from 'react-router-dom';

/**
 * SubHeader component displays a subheader with a title and optional children.
 * @param {Object} props - Component props.
 * @param {string} props.title - The title to be displayed in the subheader.
 * @param {React.ReactNode} [props.children] - Optional children components to be displayed on the right side.
 * @returns {JSX.Element} The rendered SubHeader component.
 */

const SubHeader = ({ title, children }) => {
	const language = UseLanguage();
	const navigate = useNavigate();

	return (
		<div className='flex justify-between items-center shadow-sm py-4 px-2 bg-white mb-5'>
			<div className='flex items-center'>
				<button className='text-blue-600 mr-2' onClick={() => navigate(-1)}>
					{language === 'ar' ? <IoIosArrowForward /> : <IoIosArrowBack />}
				</button>
				<span className='font-semibold'>{title}</span>
			</div>
			{children && <div className='flex space-x-3'>{children}</div>}
		</div>
	);
};
export default SubHeader;

// <SubHeader title={t('Email form')}>
//   <Button variant='primary'>Submit emails</Button>
// </SubHeader>

// =========================================
// General settings
// =========================================
// <SubHeader title={t('General settings')}>
//   <Button variant='secondary'>Discard</Button>
//    <Button variant='primary'>Save Changes</Button>
// </SubHeader>

// =========================================
// General settings
// =========================================
// import { RxDotsHorizontal } from "react-icons/rx";
// import { LuEye } from "react-icons/lu";
// import { MdCopyAll } from "react-icons/md";

//  <SubHeader title={t('General settings')}>
// 	<div className='flex space-x-3'>
// 		<button>
// 			<LuEye size='20' />
// 		</button>
// 		<button>
// 			<MdCopyAll size='20' />
// 		</button>
// 		<button>
// 			<RxDotsHorizontal size='20' />
// 		</button>
// 	</div>
// 	<Button variant='secondary'>Discard</Button>
// 	<Button variant='primary'>Save Changes</Button>
// </SubHeader>;

// =========================================
// Add New Customer
// =========================================

//  <SubHeader title={t('Add New Customer')}>
//     <Button variant='tertiary'>Discard</Button>
//     <Button variant='secondary'>Save & add new</Button>
//     <Button variant='primary'>Save Changes</Button>
// </SubHeader>

// =========================================
// Customer Info
// =========================================

// import { FiEdit } from 'react-icons/fi';
// import { RxDotsHorizontal } from 'react-icons/rx';

// <SubHeader title={t('Customer Info')}>
// 	<button>
// 		<FiEdit size='20' />
// 	</button>
// 	<button>
// 		<RxDotsHorizontal size='20' />
// 	</button>
// </SubHeader>

// =========================================
// Order Details
// =========================================
// import { RxDotsHorizontal } from 'react-icons/rx';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoIosArrowBack } from 'react-icons/io';
// import { IoPrintOutline } from 'react-icons/io5';
// import { GrUpdate } from 'react-icons/gr';

// <SubHeader title={t('Order Details')}>
// 	<Button variant='tertiary' LeftIcon={<GrUpdate />}>
// 		Update Status
// 	</Button>
// 	<Button variant='tertiary' LeftIcon={<IoPrintOutline />}>
// 		Print Invoice
// 	</Button>
// 	<button>
// 		<RxDotsHorizontal size='20' />
// 	</button>

// 	<div className='flex items-center '>
// 		<button className='border p-2 flex items-center justify-center'>
// 			<IoIosArrowBack />
// 		</button>
// 		<button className='border p-2 flex items-center justify-center'>
// 			<IoIosArrowForward />
// 		</button>
// 	</div>
// </SubHeader>;
