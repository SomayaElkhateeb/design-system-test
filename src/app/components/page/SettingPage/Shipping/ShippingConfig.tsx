import { useParams } from 'react-router-dom';
import ShippingProviders from './ShippingProviders';

export default function ShippingConfig() {
	const { config } = useParams();

	switch (config) {
		case 'setupProviders':
			return <ShippingProviders />;
	}
}
