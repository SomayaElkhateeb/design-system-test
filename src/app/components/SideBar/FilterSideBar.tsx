import { Drawer } from '@mui/material';

export default function FilterSideBar({
	sideDrawerOpen,
	handelClose,
	children,
}: {
	sideDrawerOpen: boolean;
	handelClose: () => void;
	children: React.ReactNode;
}) {
	return (
		<Drawer
			anchor='right'
			open={sideDrawerOpen}
			onClose={handelClose}
			variant='temporary'
			sx={{ zIndex: '1400' }}
		>
			{children}
		</Drawer>
	);
}
