import { HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { cards } from 'src/pages/SettingsPage/data';
import BigAppsCard from 'src/app/components/optimized/Cards/BigAppsCard';

export default function ShippingProviders() {
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings title={t('Third party shipping providers')} />
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-5'>
				{cards.map((card) => (
					<BigAppsCard key={card.id} {...card} />
				))}
			</div>
		</div>
	);
}
