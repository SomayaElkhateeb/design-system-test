import OrdersLayout from "./OrdersLayout";
import OrdersPageGuard from "./OrdersPageGuard";


const OrdersPage = () => {
	

	return (
		<OrdersPageGuard>
			<OrdersLayout />
		</OrdersPageGuard>
	);
};

export default OrdersPage;
