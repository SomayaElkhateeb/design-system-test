import { useState } from 'react';

const Modal = ({ buttonText, modalTitle, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button
				className='bg-blue-500 text-white px-4 py-2 rounded'
				onClick={openModal}
			>
				{buttonText}
			</button>

			{isOpen && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
					<div className='bg-white p-8 rounded'>
						<h2 className='text-xl mb-4'>{modalTitle}</h2>
						{children}
						<button
							className='bg-red-500 text-white px-4 py-2 rounded'
							onClick={closeModal}
						>
							Close Modal
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
