import { ChatIcon } from 'src/app/utils/icons';
import ChatCard from '../Cards/ChatCard';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**
 * ChatBtn component represents a button that, when clicked, displays a chat icon
 * and opens the chat card when clicked.
 */
const ChatBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			{/* Chat icon button */}
			<Button onClick={() => setShow(true)}>
				<button className='rounded-lg border border-light-2 size-[42px] grid place-content-center relative'>
					{/* Red notification dot */}
					<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
					<ChatIcon />
				</button>
			</Button>

			{/* Display ChatCard when show state is true */}
			{show && <ChatCard onClose={() => setShow(false)} />}
		</>
	);
};

export default ChatBtn;
