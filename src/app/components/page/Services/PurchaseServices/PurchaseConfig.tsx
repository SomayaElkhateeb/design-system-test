import { useParams } from 'react-router-dom';
import PurchaseServicesPage from './PurchaseServicesPage';

export default function PurchaseConfig() {
	const { config } = useParams();

	switch (config) {
		case 'purchaseServicesPage':
			return <PurchaseServicesPage />;
	}
}
