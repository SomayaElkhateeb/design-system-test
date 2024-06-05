import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';
import { useState } from 'react';
import Button from '@mui/material/Button';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * HelpCenterBtn component represents a button that, when clicked, displays a FAQ icon
 * and opens the help center card when clicked.
 */
const HelpCenterBtn = () => {
	const [show, setShow] = useState(false);

	return (

		<PopoverComponenet
			button={
				<>
					<Button onClick={() => setShow(true)}>
						<span className='rounded-lg size-[20px] border border-light-2 lg:size-[42px] grid place-content-center'>
							<FaqIcon />
						</span>
					</Button>
				</>
			}
		>

			{show && <HelpCenterCard onClose={() => setShow(false)} />}
		</PopoverComponenet>
	);
};

export default HelpCenterBtn;
