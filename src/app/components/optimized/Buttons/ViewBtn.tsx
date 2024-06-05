import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * ViewBtn component represents a button that, when clicked, displays a view icon
 * and opens the manage account card when clicked.
 */
const ViewBtn = ({ sm }: { sm?: boolean }) => {
	

	return (
		<PopoverComponenet
			button={
				<>
					{sm ? (
						<Button
							
							className='size-[42px] grid place-content-center cursor-pointer'
						>
							<ViewIcon />
						</Button>
					) : (
						<Button >
							<p className='rounded-lg border border-light-2 size-[42px] grid place-content-center'>
								<ViewIcon />
							</p>
						</Button>
					)}
				</>
			}
		>
			 <ManageAccountCard />
		</PopoverComponenet>
	);
};

export default ViewBtn;
