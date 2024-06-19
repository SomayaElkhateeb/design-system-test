import AppsLayout from './comp/AppsLayout';
import AppsPageGuard from './comp/AppsPageGuard';

// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from 'src/app/components/optimized/Tabs/Tabs';

const AppsPage = () => {
	return (
		<AppsPageGuard>
			<AppsLayout />
		</AppsPageGuard>
	);
};
export default AppsPage;

// export const AppsPage = () => {
// 	return (
// 		<Tabs
// 			body={
// 				<>
// 					<TabPanel value='1'>
// 						<AllServices />
// 					</TabPanel>
// 					<TabPanel value='2'>
// 						<PurchaseServicesPage />
// 					</TabPanel>
// 				</>
// 			}
// 		>
// 			{/*  children */}
// 			<Tab label={t('All services')} value='1' />
// 			<Tab label={t('Purchased services')} value='2' />
// 		</Tabs>
// 	);
// };
