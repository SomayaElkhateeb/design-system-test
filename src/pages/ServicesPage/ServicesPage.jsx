import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';


import Tabs from 'src/app/components/page/Customers/Tabs';
import AllServices from 'src/app/components/page/Services/AllServices';
import PurchaseServices from 'src/app/components/page/Services/PurchaseServices';


const ServicesPage = () => {
	//  hooks
	const { t } = useTranslation();
	return (
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
	);
};
export default ServicesPage;
