import { NotifiIcon } from 'src/app/utils/icons';
import NotificationsCard from '../Cards/NotificationsCard';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**
 * NotificationBtn component represents a button that, when clicked, displays a notification icon
 * and opens the notifications card when clicked.
 */
const NotificationBtn = ({ sm }: { sm?: boolean }) => {
	const [show, setShow] = useState(false);

	return (
		<>
			{/* Notification icon button */}
			{sm ? (
				<p className='size-[42px] grid place-content-center relative'>
					<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
					<NotifiIcon />
				</p>
			) : (
				<Button onClick={() => setShow(true)}>
					<p className='rounded-lg border border-light-2 size-[42px] grid place-content-center relative'>
						<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
						<NotifiIcon />
					</p>
				</Button>
			)}

			{/* Display NotificationsCard when show state is true */}
			{show && <NotificationsCard onClose={() => setShow(false)} />}
		</>
	);
};

export default NotificationBtn;
