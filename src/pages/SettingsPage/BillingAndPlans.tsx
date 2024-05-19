import { useTranslation } from 'react-i18next';
import { TrialBanner } from 'src/app/components/optimized';
import { HeaderSettings } from 'src/app/components/optimized';
import Bills from 'src/app/components/page/SettingPage/BillingAndPlans/Bills';
import PaymentMethods from 'src/app/components/page/SettingPage/BillingAndPlans/PaymentMethods';
import Plan from 'src/app/components/page/SettingPage/BillingAndPlans/Plan';
import Wallet from 'src/app/components/page/SettingPage/BillingAndPlans/Wallet';

export default function BillingAndPlans() {
	const { t } = useTranslation();
	return (
		<section className='flex-col-top-section-pages '>
			<HeaderSettings title={t('Billing & plans')} />
			<div className='container mx-auto'>
				<TrialBanner
					free={true}
					title={t('Your trial ended, subscribe to continue using Dookan')}
					description={t('Subscribe now and open a world with no boundaries')}
				/>
			</div>
			<section className='grid gap-5 lg:grid-cols-3 container mx-auto'>
				<div className='flex-col-top-section-pages lg:col-span-2'>
					<PaymentMethods />
					<Plan />
					<Bills />
				</div>
				<div className='col-span-1'>
					<Wallet />
				</div>
			</section>
		</section>
	);
}
