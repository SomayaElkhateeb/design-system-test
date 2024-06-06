import { NotifiIcon } from 'src/app/utils/icons';
import NotificationsCard from '../Cards/NotificationsCard';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * NotificationBtn component represents a button that, when clicked, displays a notification icon
 * and opens the notifications card when clicked.
 */
const NotificationBtn = () => {
	return (
		<PopoverComponenet
			button={
				<>
					<p className='roundedParentIcon relative'>
						<span className='absolute p-1 rounded-full bg-error top-1 right-1'></span>
						<NotifiIcon />
					</p>
				</>
			}
		>
			{/* Display NotificationsCard when show state is true */}
			<NotificationsCard />
		</PopoverComponenet>
	);
};

export default NotificationBtn;
