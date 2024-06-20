import OrdersLayout from './_comp/OrdersLayout';
import OrdersPageGuard from './_comp/OrdersPageGuard';

const OrdersPage = () => {
	return (
		<OrdersPageGuard>
			<OrdersLayout />
		</OrdersPageGuard>
	);
};

export default OrdersPage;
