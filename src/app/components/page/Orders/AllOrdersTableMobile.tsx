import { OrderInterface } from 'src/app/interface/OrderInterface';
import OrderItem from '../../optimized/Cards/OrderCard/OrderItem';

export default function AllOrdersTableMobile({ orders }: { orders: OrderInterface[] }) {
	const transformedOrders = orders.map((order: OrderInterface) => ({
		id: order.id,
		fullName: order.customer_name,
		orderStatus: order.order_status,
		orderNumber: order.id,
		price: order.total,
		currency: 'SAR',
		date: order.date,
	}));
	return (
		<section className='grid space-y-3 '>
			{transformedOrders.map((order) => (
				<OrderItem key={order.id} order={order} />
			))}
		</section>
	);
}
