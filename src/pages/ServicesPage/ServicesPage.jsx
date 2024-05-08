import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import Tabs from 'src/app/components/page/Customers/Tabs';
import AllServices from 'src/app/components/page/Services/AllServices';
import PurchaseServices from 'src/app/components/page/Services/PurchaseServices';
import ServiceDetails from 'src/app/components/page/Services/ServiceDetails/ServiceDetails';

const ServicesPage = () => {
	//  hooks
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();
	const serviceId = searchParams.get('service_id');
	return !serviceId ? (
		<Tabs
			body={
				<>
					<TabPanel value='1'>
						<AllServices />
					</TabPanel>
					<TabPanel value='2'>
						<PurchaseServices />
					</TabPanel>
				</>
			}
		>
			{/*  children */}
			<Tab label={t('All services')} value='1' />
			<Tab label={t('Purchased services')} value='2' />
		</Tabs>
	) : (
		<ServiceDetails />
	);
};
export default ServicesPage;
