
import { AnalyticsProduct } from '../../AnalyticsProducts';
import AnalyticsTableSmHeader from './AnalyticsTableSmHeader';
import AnalyticsTableSmBody from './AnalyticsSmBody';

export default function AnalyticsProductsTableMobile({
	tableData,
}: {
	tableData: AnalyticsProduct[];
}) {
	return (
		<div className='grid gap-3 divide-y'>
			{tableData.map((item) => (
				<div key={item.id} className='grid gap-1 py-3'>
					<AnalyticsTableSmHeader img={item.imageUrl} name={item.product_name} price={item.price} />
					<AnalyticsTableSmBody item={item} />
				</div>
			))}
		</div>
	);
}



