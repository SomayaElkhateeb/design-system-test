import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';
import { useState } from 'react';
import Button from '@mui/material/Button';
const HelpCenterBtn = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button onClick={() => setShow(true)}>
				<button className='rounded-lg border border-light-2 size-[42px] grid place-content-center'>
					<FaqIcon />
				</button>
			</Button>

			{show && <HelpCenterCard onClose={() => setShow(false)} />}
		</>
	);
};

export default HelpCenterBtn;
