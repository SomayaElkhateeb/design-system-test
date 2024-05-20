import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';

export default function Plan() {
	const { t } = useTranslation();
	return (
		<div className='global-cards gap-0'>
			<h2 className='text-title font-semibold text-lg'>{t('Plan')}</h2>
			<p className='text-subtitle text-sm pt-1 pb-4'>{t('You’re on free plan')}</p>
			<Button variant='primary'>{t('choose plan')}</Button>
		</div>
	);
}
