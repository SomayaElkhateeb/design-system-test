import { getImageUrl } from 'src/app/utils';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MenuOption from '../Menu/MenuOption';
const ProfileBtn = () => {
	const [show, setShow] = useState(false);
	const sortMenus = [
		{
			id: '1',
			text: 'Profile',
			onClick: () => setShow(false),
		},
	];
	return (
		<>
			<Button onClick={() => setShow(true)}>
				<button className='rounded-lg border border-light-2 size-[42px] grid place-content-center overflow-hidden'>
					<img
						src={getImageUrl('images/profile.png')}
						alt='logo'
						className=' object-cover h-full '
					/>
				</button>
			</Button>

			{/* menu */}
			{show && <MenuOption options={sortMenus} />}
		</>
	);
};

export default ProfileBtn;
