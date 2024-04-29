import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Avatars, ClientBox, InputRow } from '..';
import { MoreIcon, VectorIcon } from 'src/app/utils/icons';
import { UseLanguage } from '../../CustomHook/LanguageHook';
const ConversationCard = () => {
	const language = UseLanguage();
	return (
		<div className='w-72 h-[40rem] bg-white'>
			<div className='flex justify-between items-center p-3 border-b border-constrained'>
				<h3 className='text-title text-lg font-semibold flex items-center gap-2'>
					{language === 'ar' ? (
						<FaChevronRight className='text-sm cursor-pointer' />
					) : (
						<FaChevronLeft className='text-sm cursor-pointer' />
					)}
					chat
				</h3>
				<IoCloseCircleOutline className='text-pri-dark size-5 cursor-pointer' />
			</div>
			<div className='p-3 flex justify-between items-center border-b border-constrained cursor-pointer'>
				<ClientBox title='sid' avatar={<Avatars fName='dd' lName='bb' />} />
				<MoreIcon />
			</div>
			{/* chat */}
			<div className='bg-light-3 h-[29rem]'></div>

			{/* typing */}
			<div className='flex items-center gap-3 py-2 px-3'>
				<InputRow placeholder={'Type your message'} />
				<VectorIcon className='cursor-pointer' />
			</div>
		</div>
	);
};

export default ConversationCard;
