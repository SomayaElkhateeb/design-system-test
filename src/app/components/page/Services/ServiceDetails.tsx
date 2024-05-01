import { useTranslation } from 'react-i18next';
import { HeaderSettings } from '../../optimized';

export default function ServiceDetails() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages'>
			{/*  top section */}
			<HeaderSettings
				title={t('Service details')}
				btn1={{ text: 'Purchase service', onClick: () => {} }}
				variant={'settingOneBtn'}
			/>
		</div>
	);
}
