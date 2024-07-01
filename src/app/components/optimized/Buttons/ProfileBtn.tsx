import { getImageUrl } from 'src/app/utils';
import ManageAccountCard from '../Cards/ManageAccountCard';
import PopoverComponenet from '../Popover/Popover';
import { useState } from 'react';

const ProfileBtn = () => {
	const [show, setShow] = useState(true);

	return (
		<PopoverComponenet
			close={() => setShow(show)}
			button={
				<div className='roundedParentIcon'>
					<img src={getImageUrl('images/profile.png')} alt='logo' className='object-cover h-full' />
				</div>
			}
		>
			<ManageAccountCard onClose={() => setShow(false)} />
		</PopoverComponenet>
	);
};

export default ProfileBtn;
