import { getImageUrl } from 'src/app/utils';

import ManageAccountCard from '../Cards/ManageAccountCard';
import PopoverComponenet from '../Popover/Popover';
import { useState } from 'react';

/**
 * ProfileBtn component represents a button that, when clicked, displays a user's profile image
 * and opens the manage account card when clicked.
 */
const ProfileBtn = () => {
	const [show, setShow] = useState(false);
	return (
		<PopoverComponenet
			close={() => setShow(show)}
			button={
				<div className='roundedParentIcon'>
					<img
						src={getImageUrl('images/profile.png')}
						alt='logo'
						className=' object-cover h-full '
					/>
				</div>
			}
		>
			<ManageAccountCard onClose={() => setShow(true)} />
		</PopoverComponenet>
	);
};

export default ProfileBtn;
