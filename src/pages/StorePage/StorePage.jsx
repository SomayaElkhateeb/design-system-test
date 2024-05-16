import StoreLayout from 'src/app/components/page/StorePage/StoreLayout';
import StorePageGuard from 'src/app/components/page/StorePage/StorePageGuard';

const StorePage = () => {
	return (
		<StorePageGuard>
			<StoreLayout />
		</StorePageGuard>
	);
};

export default StorePage;
