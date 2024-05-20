import { useTranslation } from 'react-i18next';
import { HeaderSettings } from 'src/app/components/optimized';
import PaymentTable from './PaymentTable';

export default function PaymentProvidersPage() {
	const { t } = useTranslation();
	return (
		<div>
			<HeaderSettings title={t('Third party payment providers')} />
			<div className='custom_container'>
				<PaymentTable />
			</div>
		</div>
	);
}
