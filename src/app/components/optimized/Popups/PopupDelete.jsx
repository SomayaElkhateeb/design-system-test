import { useTranslation } from 'react-i18next';

/**
 * @param {{
 *  onClose: () => void;
 *  delete: () => void;
 *  isOpen: boolean;
 * 	title: string;
 * 	subTitle:string;
 * }} props
 */
export default function PopupDelete(props) {
	const { t } = useTranslation();
	if (!props.isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={props.onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between border border-error rounded-md w-[420px] h-[149px]  p-5 bg-white'>
				<h3 className='font-semibold text-title'>{props.title}</h3>
				<p className='mt-2 text-sm text-title'>{props.subTitle}</p>
				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='btn-delete' onClick={props.delete}>
						{t('Delete')}
					</button>
					<button className='px-4 py-2 text-sm font-semibold text-title' onClick={props.onClose}>
						{t('Cancel')}
					</button>
				</div>
			</div>
		</div>
	);
}
