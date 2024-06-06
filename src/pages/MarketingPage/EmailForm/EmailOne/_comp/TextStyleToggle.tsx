import { useState } from 'react';
import { FaBold, FaItalic, FaLink } from 'react-icons/fa';
import { Modal, Box, Button, TextField } from '@mui/material';

const TextStyleToggle = ({ isBold, isItalic, onBoldToggle, onItalicToggle, onLinkInsert }) => {
	const [link, setLink] = useState('');
	const [open, setOpen] = useState(false);

	const handleLinkChange = (e) => {
		setLink(e.target.value);
	};

	const handleLinkSubmit = () => {
		onLinkInsert(link);
		setLink('');
		setOpen(false);
	};

	return (
		<div className='flex items-center space-x-2 mt-4 w-full relative'>
			<button
				className={`p-2 w-full flex items-center justify-center ${
					isBold ? 'bg-gray-500 bg-gray text-white ' : 'bg-white text-gray-500'
				} border border-gray-300`}
				onClick={onBoldToggle}
			>
				<FaBold />
			</button>
			<button
				className={`p-2 w-full flex items-center justify-center ${
					isItalic ? 'bg-gray-500 bg-gray text-white ' : 'bg-white text-gray-500'
				} border-t border-b border-gray-300`}
				onClick={onItalicToggle}
			>
				<FaItalic />
			</button>
			<button
				className={`p-2 w-full flex items-center justify-center bg-white text-gray-500 border border-gray-300 `}
				onClick={() => setOpen(true)}
			>
				<FaLink />
			</button>

			<Modal
				open={open}
				onClose={() => setOpen(false)}
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			>
				<Box sx={{ width: 300, bgcolor: 'background.paper', p: 2 }}>
					<TextField
						label='Enter URL'
						value={link}
						onChange={handleLinkChange}
						fullWidth
						variant='outlined'
						sx={{ mb: 1 }}
					/>
					<Button onClick={handleLinkSubmit} variant='contained' sx={{ mr: 1 }}>
						Insert Link
					</Button>
					<Button onClick={() => setOpen(false)} variant='contained'>
						Cancel
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default TextStyleToggle;
