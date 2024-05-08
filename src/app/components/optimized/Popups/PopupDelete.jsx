import { useTranslation } from 'react-i18next';

/**
 * PopupDelete component displays a confirmation popup for deleting an item.
 * @param {Object} props - The props object.
 * @param {() => void} props.onClose - Function to be called when the popup is closed.
 * @param {() => void} props.onDelete - Function to be called when the "Delete" button is clicked.
 * @param {string} [props.title='Are you sure of deleting this?'] - The title of the popup.
 * @param {string} [props.subTitle='You cannot undo this action'] - The subtitle of the popup.
 * @returns {JSX.Element} - Returns the JSX for the PopupDelete component.
 */
export default function PopupDelete({
	title = 'Are you sure of deleting this?',
	subTitle = 'You cannot undo this action',
	onClose,
	onDelete,
}) {
	const { t } = useTranslation();

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between border border-error rounded-md w-[26.3rem] h-[9.3rem] p-5 bg-white'>
				<h3 className='font-semibold text-title'>{title}</h3>
				<p className='mt-2 text-sm text-title'>{subTitle}</p>
				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='btn-delete' onClick={onDelete}>
						{t('Delete')}
					</button>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={onClose}>
						{t('Cancel')}
					</button>
				</div>
			</div>
		</div>
	);
}

/*
const handleDelete = () => {
	// Implement your logic for deleting the item
	console.log('Item deleted');
};

const handleClose = () => {
	// Implement your logic for closing the popup
	console.log('Popup closed');
};

<div className='App'>
	<PopupDelete
		title='Delete Item'
		subTitle='Are you sure you want to delete this item? This action cannot be undone.'
		onClose={handleClose}
		onDelete={handleDelete}
	/>
</div>
*/