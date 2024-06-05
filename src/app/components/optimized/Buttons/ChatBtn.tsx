import { ChatIcon } from 'src/app/utils/icons';
import ChatCard from '../Cards/ChatCard';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * ChatBtn component represents a button that, when clicked, displays a chat icon
 * and opens the chat card when clicked.
 */
const ChatBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<PopoverComponenet
			button={
				<>
					<Button onClick={() => setShow(true)}>
						<p className='rounded-lg border border-light-2 size-[42px] grid place-content-center relative'>
							{/* Red notification dot */}
							<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
							<ChatIcon />
						</p>
					</Button>
				</>
			}
		>
			{show && <ChatCard onClose={() => setShow(false)} />}
		</PopoverComponenet>
	);
};

export default ChatBtn;
