import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';
import Button from '@mui/material/Button';
import { useState } from 'react';
const ViewBtn = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<Button onClick={() => setShow(true)}>
				<button className='rounded-lg border border-light-2 size-[42px] grid place-content-center'>
					<ViewIcon />
				</button>
			</Button>

			{show && <ManageAccountCard onClose={() => setShow(false)} />}
		</>
	);
};

export default ViewBtn;
