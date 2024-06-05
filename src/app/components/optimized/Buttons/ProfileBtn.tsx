import { getImageUrl } from 'src/app/utils';
import Button from '@mui/material/Button';

import ManageAccountCard from '../Cards/ManageAccountCard';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * ProfileBtn component represents a button that, when clicked, displays a user's profile image
 * and opens the manage account card when clicked.
 */
const ProfileBtn = () => {
	

	return (
		<PopoverComponenet
			button={
				<>
					<Button >
						<div className='rounded-lg border border-light-2 size-[42px] grid place-content-center overflow-hidden'>
							<img
								src={getImageUrl('images/profile.png')}
								alt='logo'
								className=' object-cover h-full '
							/>
						</div>
					</Button>
				</>
			}
		>
			<ManageAccountCard  />
		</PopoverComponenet>
	);
};

export default ProfileBtn;
