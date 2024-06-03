import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import PaymentCard from 'src/app/components/optimized/Payment/PaymentCard';
import Summary from './Summary';

export default function PurchaseServicesPage() {
	//  hooks
	const { t } = useTranslation();
	return (
		<>
			<HeaderSettings title={t('Purchase service')} />
			<div className='custom_container py-5'>
				<div className='custom-grid-parent'>
					<div className='grid-left'>
						<PaymentCard />
					</div>
					<div className='grid-right'>
						<Summary />
					</div>
				</div>
			</div>
		</>
	);
}
