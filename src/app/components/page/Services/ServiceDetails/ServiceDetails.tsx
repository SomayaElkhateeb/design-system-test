import { useTranslation } from 'react-i18next';
import { HeaderSettings } from '../../../optimized';
import { getImageUrl } from 'src/app/utils';
import ServiceDetailsSales from './ServiceDetailssales';


export default function ServiceDetails() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages'>
			{/*  top section */}
			<div className='flex flex-col'>
				<HeaderSettings
					title={t('Service details')}
					btn1={{ text: 'Purchase service', onClick: () => {} }}
					variant={'settingOneBtn'}
				/>

				<img loading='lazy' alt='img' src={getImageUrl('Services/poster.svg')} />
			</div>
			<div className='container mx-auto'>
				<div className='flex-col-top-section-pages'>
					{/*  middle section */}
					<div className='grid grid-cols-3 gap-4'>
						<div className='col-span-2'>
							<ServiceDetailsSales/>
						</div>
						<div>dfef</div>
					</div>
				</div>
			</div>
		</div>
	);
}
