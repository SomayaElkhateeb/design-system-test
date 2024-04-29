import { useTranslation } from 'react-i18next';
// if (!props.isOpen) {
// 	return null;
// }
/**
 * @param {{
 *  onClose: () => void;
 *  onDelete: () => void;
 * 	title?: string;
 * 	subTitle?: string;
 * }} props
 */
export default function PopupDelete({
	title = 'Are you sure of deleting this?',
	subTitle = 'You can not undo this action',
	onClose,
	onDelete,
}) {
	const { t } = useTranslation();

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between border border-error rounded-md w-[26.3rem] h-[9.3rem]  p-5 bg-white'>
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
