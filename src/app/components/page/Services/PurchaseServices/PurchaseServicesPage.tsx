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
				<div className='grid lg:grid-cols-3  items-start gap-4'>
					<div className='lg:col-span-2'>
						<PaymentCard />
					</div>
					<div className='col-span-1'>
						<Summary />
					</div>
				</div>
			</div>
		</>
	);
}
