import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import DookanPay from './comp/DookanPay';
import ManualPayment from './comp/ManualPayment';
import PaymentProvidersCard from './comp/PaymentProvidersCard';

export default function PaymentSettings() {
	const { t } = useTranslation();

	return (
		<div className='flex-col-global'>
			<SubHeader title={t('Payment')} />
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
