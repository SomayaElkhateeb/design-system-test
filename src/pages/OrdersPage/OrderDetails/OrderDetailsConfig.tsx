import { useParams } from 'react-router-dom';
import OrderDetails from './OrderDetails';
export default function OrderDetailsConfig() {
	// const { config } = useParams();
	// switch (config) {
	// 	case 'orderDetails':
	return <OrderDetails />;
	// default:
	// 	return <div>Invalid config</div>;
}
