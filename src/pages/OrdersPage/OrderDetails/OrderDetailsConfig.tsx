import { useParams } from 'react-router-dom';
import OrderDetails from './OrderDetails';
export default function OrderDetailsConfig() {
	const params = useParams();
	console.log(params)
	switch (params.config) {
		case 'orderDetails':
			return <OrderDetails />;
		default:
			return <div>Invalid config</div>;
	}
}
