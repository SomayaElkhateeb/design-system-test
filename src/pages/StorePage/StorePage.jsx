import StoreLayout from "./StoreLayout";
import StorePageGuard from "./StorePageGuard";


const StorePage = () => {
	return (
		<StorePageGuard>
			<StoreLayout />
		</StorePageGuard>
	);
};

export default StorePage;
