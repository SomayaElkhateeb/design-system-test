// Done refactoring to type
/**
 * @param {{
 *  isOpen: boolean;
 *  onClose: () => void;
 *  title: string;
 *  subTitle: string;
 *  children: JSX.Element;
 *  proceedButton: string;
 *  onCancel?: () => void;
 *  onProceed: () => void;
 * }} props
 */
export default function PopupProceed(props) {
	const handleProceed = () => {
		alert('Confirmed');
		props.onClose();
		// props.onProceed(); // Uncommented
	};

	if (!props.isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-3'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={props.onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between max-w-xl p-5 bg-white border rounded-md border-constrained'>
				<h3 className='font-semibold text-title'>{props.title}</h3>
				<p className='mt-1 text-sm subtitle'>{props.subTitle}</p>

				<div>{props.children}</div>

				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={props.onCancel ?? props.onClose}>
						Cancel
					</button>
					<button className='btn-pri' onClick={handleProceed}>
						{props.proceedButton}
					</button>
				</div>
			</div>
		</div>
	);
}
