import { useState } from 'react';

/**
 * @param {{
 *  buttonText: string;
 *  modalTitle: string;
 *  children: import('react').ReactNode;
 * }} props
 */
export default function Modal(props) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button className='px-4 py-2 text-white bg-blue-500 rounded' onClick={openModal}>
				{props.buttonText}
			</button>

			{isOpen && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='p-8 bg-white rounded'>
						<h2 className='mb-4 text-xl'>{props.modalTitle}</h2>
						{props.children}
						<button className='px-4 py-2 text-white bg-red-500 rounded' onClick={closeModal}>
							Close Modal
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
