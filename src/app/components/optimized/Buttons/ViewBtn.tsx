import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**
 * ViewBtn component represents a button that, when clicked, displays a view icon
 * and opens the manage account card when clicked.
 */
const ViewBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			{/* View icon button */}
			<Button onClick={() => setShow(true)}>
				<button className='rounded-lg border border-light-2 size-[42px] grid place-content-center'>
					<ViewIcon />
				</button>
			</Button>

			{/* Display ManageAccountCard when show state is true */}
			{show && <ManageAccountCard onClose={() => setShow(false)} />}
		</>
	);
};

export default ViewBtn;
