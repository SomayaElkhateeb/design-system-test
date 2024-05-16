import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';

export default function ThemesDetails() {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='container mx-auto'>
			<div className='flex-col-top-section-pages'>
				<HeaderSettings
					variant='settingOneBtn'
					title={"mmm"}
					btn1={{ text: t('Apply template'), onClick: () => {} }}
				/>

				<img
					src={getImageUrl('images/ThemesPage/largewebsiteimg.png')}
					loading='lazy'
					alt='smallwebsiteimg'
				/>
			</div>
		</div>
	);
}
