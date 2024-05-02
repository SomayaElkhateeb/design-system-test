import { SearchIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Avatars, ClientBox, InputRow } from '..';
import { UseLanguage } from '../../CustomHook/LanguageHook';

/**
 * Chat component displays a list of chats with search functionality.
 *
 * @param {object} props - Props for the Chat component.
 * @param {string} props.title - Title of the chat.
 * @param {Function} props.onClose - Function to handle the close action.
 * @param {Array} props.data - Array of chat data.
 * @returns {JSX.Element} Chat component.
 */

const Chat = ({ title, onClose, data }: { title: string; onClose: () => void; data: any }) => {
	const [searchValue, setSearchValue] = useState('');
	const { t } = useTranslation();
	const navigate = useNavigate();
	const language = UseLanguage();

	const handleClick = (id: number) => {
		console.log('click', id);
		navigate('/conversation');
	};

	return (
		<div className={`h-[27rem] ${language === 'ar' ? 'pl-5' : 'pr-5'}  flex flex-col gap-4`}>
			<div className='flex justify-between items-center p-3'>
				<h3 className='text-title text-lg font-semibold'>{title}</h3>
				<IoCloseCircleOutline onClick={onClose} className='text-pri-dark size-5 cursor-pointer' />
			</div>

			<div className='px-3'>
				<InputRow
					leftIcon={<SearchIcon className='fill-hint' />}
					placeholder={`${t('Search in')} ${title}`}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</div>

			<div className='flex flex-col gap-4'>
				{data.map((e) => {
					const { id, title, fName, lName, src, details, time } = e;
					return (
						<div
							onClick={() => handleClick(id)}
							key={id}
							className='px-3 pb-3 flex justify-between items-start border-b border-constrained cursor-pointer'
						>
							<ClientBox
								title={title}
								avatar={<Avatars fName={fName} lName={lName} src={src} />}
								details={details}
							/>

							<span className='text-sm text-subtitle'>{time}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Chat;