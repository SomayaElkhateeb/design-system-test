import { Navigate, useLocation } from 'react-router-dom';

export default function OrdersPageGuard({ children }: { children: React.ReactNode }) {
	const { pathname } = useLocation();
	if (pathname === '/orders') {
		return <Navigate to='/orders/AllOrders' />;
	}
	return children;
}
