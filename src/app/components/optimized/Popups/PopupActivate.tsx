/**
 * @param {{
 *  onClose: () => void;
 *  isOpen: boolean;
 * }} props
 */
import { useTranslation } from 'react-i18next';
import { InputRow } from '..';
import { useState } from 'react';

interface PopupActivateProps {
	onClose: () => void;
	isOpen: boolean;
	name: string;
}

const PopupActivate: React.FC<PopupActivateProps> = ({ onClose, name }) => {
	const { t } = useTranslation();
	const [state, setState] = useState('');

	const saveValueId = () => {
		console.log('pass', state);
		onClose();
	};
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between rounded-md  w-[35rem] p-5 bg-white'>
				<h3 className='font-semibold text-title capitalize mb-5'>
					{t('Activate')} {name} {t('Pixel')}
				</h3>
				<div className='w-96'>
					<InputRow label={t('Pixle ID')} value={state} onChange={(e) => setState(e.target.value)} />
				</div>
				<p className='mt-2 text-sm text-title'>
					{t('You can copy it from')} <span className='capitalize'>{name}</span> {t('ads manager')}
				</p>

				<div className='flex items-center justify-end gap-2 mt-5'>
					<button className='btn-ter' onClick={onClose}>
						{t('Cancel')}
					</button>

					<button className='btn-pri' onClick={saveValueId}>
						{t('Activate')}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PopupActivate;
