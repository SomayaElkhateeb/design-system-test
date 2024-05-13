import { mostPopularApps } from 'src/app/utils/constants';
import BigAppsCard from '../../../Cards/BigAppsCard';
import { HeaderSettings } from 'src/app/components/optimized';

export default function ShippingProviders() {
	const { t } = useTranslation();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings title={t('shipping')} />
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{mostPopularApps.map((app) => (
					<BigAppsCard key={app.id} {...app} />
				))}
			</div>
		</div>
	);
}
