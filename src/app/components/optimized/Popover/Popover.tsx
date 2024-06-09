// global component used in multi pages like customers
import Popover from '@mui/material/Popover';

import Button from '@mui/material/Button';
import React, { useState } from 'react';
export default function PopoverComponenet({
	close,
	button,
	children,
}: {
	close?: () => void;
	button: React.ReactNode;
	children: React.ReactNode;
}) {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<>
			<Button sx={{ color: 'black', minWidth: '2px' }} aria-describedby={id} onClick={handleClick}>
				{button}
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<div onClick={close ? undefined : handleClose}>{children}</div>
			</Popover>
		</>
	);
}