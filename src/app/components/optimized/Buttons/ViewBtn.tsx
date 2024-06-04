import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**
 * ViewBtn component represents a button that, when clicked, displays a view icon
 * and opens the manage account card when clicked.
 */
const ViewBtn = ({ sm }: { sm?: boolean }) => {
	const [show, setShow] = useState(false);

	return (
		<div className='fifth-step'>
			{sm ? (
				<p
					onClick={() => setShow(true)}
					className='size-[42px] grid place-content-center relative cursor-pointer'
				>
					<ViewIcon />
				</p>
			) : (
				<Button onClick={() => setShow(true)}>
					<p className='rounded-lg border border-light-2 size-[42px] grid place-content-center relative'>
						<ViewIcon />
					</p>
				</Button>
			)}

			{/* Display ManageAccountCard when show state is true */}
			{show && <ManageAccountCard onClose={() => setShow(false)} />}
		</div>
	);
};

export default ViewBtn;
