import { useTranslation } from 'react-i18next';
import { IoCloseCircleOutline } from 'react-icons/io5';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InternalchatIcon, MessengerIcon, SearchIcon, WhatsappIcon } from 'src/app/utils/icons';
import { Avatars, ClientBox, InputRow } from '..';
import { useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import ConversationCard from './ConversationCard';
import { useNavigate, useParams } from 'react-router-dom';
import { UseLanguage } from '../../CustomHook/LanguageHook';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const ChatCard = ({ onClose }: { onClose: () => void }) => {
	const language = UseLanguage();
	const { chat } = useParams();
	if (chat === 'conversation') return <ConversationCard />;

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const card = document.getElementById('chat-card');
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
			id='chat-card'
			className={`bg-white w-80 pb-5 absolute shadow-lg top-[4.5rem] ${
				language === 'ar'
					? 'rounded-tr-md rounded-br-md left-10'
					: 'rounded-tl-md rounded-bl-md right-10'
			} `}
		>
			<VerticalTabs onClose={onClose} />
		</div>
	);
};

const data = [
	{
		id: 1,
		title: 'salem',
		details: 'Thanks!',
		time: 'Yesterday',
		src: getImageUrl('images/profile.png'),
	},
	{
		id: 2,
		title: 'walied sayed',
		fName: 'walied',
		lName: 'sayed',
		details: 'Thanks!',
		time: '4:30 AM',
	},
	{
		id: 3,
		title: 'salem',
		details: 'Thanks!',
		time: 'Yesterday',
		src: getImageUrl('images/profile.png'),
	},
];
export default ChatCard;

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

function VerticalTabs({ onClose }: { onClose: () => void }) {
	const [value, setValue] = React.useState(0);
	const { t } = useTranslation();
	const language = UseLanguage();
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: 'background.paper',
				display: 'flex',
				width: '22rem',
			}}
		>
			{language === 'ar' ? (
				<Tabs
					className='w-12'
					orientation='vertical'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					sx={{ borderLeft: 1, borderColor: 'divider' }}
				>
					<Tab label={<InternalchatIcon className='fill-hint ml-10' />} {...a11yProps(0)} />
					<Tab label={<WhatsappIcon className='fill-hint ml-10' />} {...a11yProps(1)} />
					<Tab label={<MessengerIcon className='fill-hint ml-10' />} {...a11yProps(2)} />
				</Tabs>
			) : (
				<Tabs
					className='w-12'
					orientation='vertical'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					<Tab label={<InternalchatIcon className='fill-hint mr-10' />} {...a11yProps(0)} />
					<Tab label={<WhatsappIcon className='fill-hint mr-10' />} {...a11yProps(1)} />
					<Tab label={<MessengerIcon className='fill-hint mr-10' />} {...a11yProps(2)} />
				</Tabs>
			)}
			<TabPanel value={value} index={0}>
				<Chat title={t('Chat')} onClose={onClose} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Chat title={t('WhatsApp')} onClose={onClose} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Chat title={t('Messenger')} onClose={onClose} />
			</TabPanel>
		</Box>
	);
}

const Chat = ({ title, onClose }: { title: string; onClose: () => void }) => {
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();
	const { t } = useTranslation();
	const handleClick = (id) => {
		console.log('click', id);
		navigate('/conversation');
	};
	return (
		<div className='h-[40rem] flex flex-col gap-4'>
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
							className='px-3 pb-3 flex justify-between items-center border-b border-constrained cursor-pointer'
						>
							<ClientBox
								title={title}
								avatar={<Avatars fName={fName} lName={lName} src={src} />}
								details={details}
							/>

							<span className='text-sm'>{time}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
