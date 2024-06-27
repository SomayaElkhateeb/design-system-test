import { useTranslation } from 'react-i18next';
import { getImageUrl } from 'src/app/utils';

export default function EmailContent() {
	const { t } = useTranslation();

	return (
		<div className='global-cards'>
			<h2 className='title'>{t('Email Content')}</h2>

			{/* forms */}

			{/* image */}
			<div className='border border-constrained rounded p-5 w-full h-full'>
				<img src={getImageUrl('images/mailOne.png')} className='w-full h-full' />
			</div>
		</div>
	);
}
