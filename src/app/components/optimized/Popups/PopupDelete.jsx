// Done refactoring to type
/**
 * @param {{
 *  onClose: () => void;
 *  isOpen: boolean;
 * }} props
 */
export default function PopupDelete(props) {
	if (!props.isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={props.onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between border border-error rounded-md w-[420px] h-[149px]  p-5 bg-white'>
				<h3 className='font-semibold text-title'>Are you sure of deleting this?</h3>
				<p className='mt-2 text-sm text-title'>You cannot undo this action</p>
				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='btn-delete'>Delete</button>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={props.onClose}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
