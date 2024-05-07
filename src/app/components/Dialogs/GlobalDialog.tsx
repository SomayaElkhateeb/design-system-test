import { Box, Modal } from '@mui/material';

 export interface style {
	position?: string;
	top?: string;
	left?: string;
	height: { md: string; xs: string };
	overflowY?: string;
	transform?: string;
	width: { md: string; xs: string };
	bgcolor?: string;
	p?: number;
	borderRadius?: string;
}
export default function GlobalDialog({
	openDialog,
	handleClose,
	style,
	children,
}: {
	openDialog: boolean;
	handleClose: (e:boolean) => void;
	children: React.ReactNode;
	style: style;
}) {
	const propStyle = {
		...style,
		bgcolor: 'white',
		p: 2.5,
		borderRadius: '10px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		overflowY: 'auto',
		transform: 'translate(-50%, -50%)',
	};
	return (
		<Modal
			open={openDialog}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			disableAutoFocus={true}
		>
			<Box sx={propStyle}>{children}</Box>
		</Modal>
	);
}
