import HorizontalTabs from 'src/app/components/optimized/Tabs/HorizontalTabs';
import ProductReviews from '../ProductReviews/ProductReviews';
import AsksQueries from '../AsksQueries/AsksQueries';

const ReviewsPageLayout = () => {
	const tabContent = {
		'Product Reviews': <ProductReviews />,
		'Asks & Queries': <AsksQueries />,
	};
	return (
		<>
			<HorizontalTabs defaultTab='Product Reviews' tabContent={tabContent} />
		</>
	);
};

export default ReviewsPageLayout;
