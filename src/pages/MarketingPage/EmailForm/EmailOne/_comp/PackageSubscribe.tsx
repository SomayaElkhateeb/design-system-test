import { useTranslation } from 'react-i18next';

import PaymentCard from 'src/app/components/optimized/Payment/PaymentCard';
import PackageSelector from './PackageSelector';
import '../../_comp/custom-radio.css';

export default function PackageSubscribe() {
	const { t } = useTranslation();

	return (
		<>
			{/* <SubHeader title={t('Subscribe to package')} /> */}
			<div className='custom_container py-5'>
				<div className='grid lg:grid-cols-3  items-start gap-4'>
					<div className='lg:col-span-2'>
						<PaymentCard />
					</div>
					<div className='col-span-1'>
						<PackageSelector />
					</div>
				</div>
			</div>
		</>
	);
}
