import { HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

import PaymentProvidersCard from './comp/PaymentProvidersCard';
import ManualPayment from './comp/ManualPayment';
import DookanPay from './comp/DookanPay';

export default function PaymentSettings() {
	const { t } = useTranslation();

	return (
	<div className='flex-col-top-section-pages'>
			<HeaderSettings title={t('Payment')} />
			<div className='custom_container grid grid-cols-2 gap-5 '>
				<div className='col-span-2 lg:col-span-1 '>
					<PaymentProvidersCard />
				</div>
				<div className='col-span-2 lg:col-span-1'>
					<DookanPay />
				</div>
				<div className='col-span-2'>
					<ManualPayment />
				</div>
			</div>
		</div>
	);
}
