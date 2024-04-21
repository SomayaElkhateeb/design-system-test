// TODO: (needs to be reviewed)

// <PopupDiscover helpClick={handleHelpClick} discoverClick={handleDiscoverClick} title="Discover our learnning hub" subtitle="Learn about how to use dookan and a lot more!"/>

import { useTranslation } from 'react-i18next';
import image from 'src/app/assets/brand/cloud.svg';
/**
 * @param {{
 *  isOpen: boolean;
 *  onClose: () => void;
 *  title: string;
 *  subTitle: string;
 *  helpClick?: () => void;
 *  discoverClick: () => void;
 * }} props
 */
export default function PopupDiscover(props) {
	const { t } = useTranslation();
	return (
		<div className='grid grid-row-3 border border-constrained bg-white w-[420px] p-[12px]'>
			<div className='bg-sec-light rounded-md h-[131px] w-[396px] mb-5 flex justify-center items-center'>
				<img className='h-[29.92px] w-[43.39px]' src={image} alt='brand' />
			</div>
			<div className='mb-5'>
				<h3 className='text-sm font-semibold text-title'>{props.title}</h3>
				<p className='mt-2 text-sm text-subtitle'>{props.subTitle}</p>
			</div>
			<div className='flex items-end justify-end gap-4'>
				<button className='btn-sec' onClick={props.helpClick}>
					{t('Help center')}
				</button>
				<button className='btn-pri' onClick={props.discoverClick}>
					{t('Discover Now')}
				</button>
			</div>
		</div>
	);
}
