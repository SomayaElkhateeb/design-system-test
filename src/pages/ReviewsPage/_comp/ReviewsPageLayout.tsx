import HorizontalTabs from 'src/app/components/optimized/Tabs/HorizontalTabs';
import ProductReviews from '../ProductReviews/ProductReviews';
import AsksQueries from '../AsksQueries/AsksQueries';
import StoreReviews from '../StoreReviews/StoreReviews';

const ReviewsPageLayout = () => {
	const tabContent = {
		'Product Reviews': <ProductReviews />,
		'Asks & Queries': <AsksQueries />,
		'Store Reviews': <StoreReviews />,
	};
	return (
		<>
			<HorizontalTabs defaultTab='Product Reviews' tabContent={tabContent} />
		</>
	);
};

export default ReviewsPageLayout;
