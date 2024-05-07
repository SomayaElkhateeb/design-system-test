import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';
import { useState } from 'react';
import Button from '@mui/material/Button';

/**
 * HelpCenterBtn component represents a button that, when clicked, displays a FAQ icon
 * and opens the help center card when clicked.
 */
const HelpCenterBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			{/* Help center icon button */}
			<Button onClick={() => setShow(true)}>
				<span className='rounded-lg border border-light-2 size-[42px] grid place-content-center'>
					<FaqIcon />
				</span>
			</Button>

			{/* Display HelpCenterCard when show state is true */}
			{show && <HelpCenterCard onClose={() => setShow(false)} />}
		</>
	);
};

export default HelpCenterBtn;
