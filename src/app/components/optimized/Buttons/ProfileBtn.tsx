import { getImageUrl } from 'src/app/utils';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ManageAccountCard from '../Cards/ManageAccountCard';

/**
 * ProfileBtn component represents a button that, when clicked, displays a user's profile image
 * and opens the manage account card when clicked.
 */
const ProfileBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			{/* Profile image button */}
			<Button onClick={() => setShow(true)}>
				<div className='rounded-lg border border-light-2 size-[42px] grid place-content-center overflow-hidden'>
					<img
						src={getImageUrl('images/profile.png')}
						alt='logo'
						className=' object-cover h-full '
					/>
				</div>
			</Button>

			{/* Display ManageAccountCard when show state is true */}
			{show && <ManageAccountCard onClose={() => setShow(false)} />}
		</>
	);
};

export default ProfileBtn;
