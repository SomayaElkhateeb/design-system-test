import { useTranslation } from 'react-i18next';
import { HeaderSettings, PaymentContainer } from 'src/app/components/optimized';
import PaymentCard from 'src/app/components/optimized/Payment/PaymentCard';

export default function PurchaseServicesPage() {
	const { t } = useTranslation();
	return (
		<div>
			<HeaderSettings title={t('Purchase service')} />

			<PaymentContainer />

			<PaymentCard />
		</div>
	);
}
