const PopupProceed = ({ isOpen, onClose, title, subTitle, children, proceedButton, onCancel, onProceed }) => {
	const handleClose = () => {
		onClose();
	};

	const handleProceed = () => {
		alert('Confirmed');
		onClose();
		// onProceed(); // Uncommented
	};

	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center p-3'>
					{/* Overlay */}
					<div className='fixed inset-0 bg-black opacity-50' onClick={handleClose}></div>

					{/* Popup Content */}
					<div className='relative flex flex-col content-between border border-constrained rounded-md max-w-xl p-5 bg-white'>
						<h3 className='font-semibold text-title'>{title}</h3>
						<p className='mt-1 text-sm subtitle'>{subTitle}</p>

						<div>{children}</div>

						<div className='flex justify-end items-center gap-2 mt-5'>
							<button className='font-semibold text-title text-sm px-4 py-2' onClick={onCancel || handleClose}>
								Cancel
							</button>
							<button className='btn-pri' onClick={handleProceed}>
								{proceedButton}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PopupProceed;
