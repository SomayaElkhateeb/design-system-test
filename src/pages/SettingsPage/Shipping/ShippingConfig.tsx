import { useParams } from 'react-router-dom';
import ShippingProviders from './OpenSetup/Providers/ShippingProviders';
import DeliverYourself from './OpenSetup/Providers/DeliverYourself';
import SelfPickup from './OpenSetup/Providers/SelfPickup';

export default function ShippingConfig() {
	const { config } = useParams();

	switch (config) {
		case 'setupProviders':
			return <ShippingProviders />;
		case 'deliverYourself':
			return <DeliverYourself />;
		case 'selfPickup':
			return <SelfPickup />;
	}
}
