import { CustomTable } from 'src/app/components/optimized';
import { columns, data } from './_comp/StoreReviewsData';

const StoreReviews = () => {
	return (
		<div>
			<CustomTable data={data} columns={columns} initialPage={1} initialItemsPerPage={2} />
		</div>
	);
};

export default StoreReviews;
