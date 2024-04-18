// TODO: (needs to be reviewed)
import { useTranslation } from 'react-i18next';
import image from 'src/app/assets/brand/cloud.svg';

/**
 * @param {{
 *  onClose: () => void;
 *  isOk: () => void;
 * 	subTitle:string;
 * }} props
 */

export default function PopupWelcome(props) {
	const { t } = useTranslation();
	return (
		<div className='grid grid-row-3 border border-constrained rounded-md w-[420px] h-[247px] p-5 bg-white'>
			<div className='flex items-center justify-center w-full mb-5 rounded'>
				<img className='w-[95.04px] h-[65.54px]' src={image} alt='' />
			</div>
			<div className='mb-2 text-center'>
				<h3 className='font-semibold text-title'>{t('Welcome to Dookan')}</h3>
				<p className='mt-2 text-[13px] text-pri-dark'>{props.subTitle}</p>
			</div>
			<div className='flex items-end justify-end gap-4'>
				<button className='btn-ter' onClick={props.onClose}>
					{t('No Thanks')}
				</button>
				<button className='btn-pri' onClick={props.isOk}>
					{t('Ok')}
				</button>
			</div>
		</div>
	);
}
