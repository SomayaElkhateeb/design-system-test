// import { useTranslation } from 'react-i18next';
// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from 'src/app/components/optimized/Tabs/Tabs';
// import AppStore from './AppStore/AppStore';
// import InstalledApps from './InstalledApps/InstalledApps';
// import { Tab } from '@mui/material';

import AppsLayout from './comp/AppsLayout';
import AppsPageGuard from './comp/AppsPageGuard';
// export const AppsPage = () => {
// 	const { t } = useTranslation();
// return (
// 	<Tabs
// 		body={
// 			<>
// 				<TabPanel value='1'>
// 					<AppStore />
// 				</TabPanel>
// 				<TabPanel value='2'>
// 					<InstalledApps />
// 				</TabPanel>
// 			</>
// 		}
// 	>
// 		{/*  children */}
// 		<Tab label={t('app store')} value='1' />
// 		<Tab label={t('installed apps')} value='2' />
// 	</Tabs>
// );
// };

const AppsPage = () => {
	return (
		<AppsPageGuard>
			<AppsLayout />
		</AppsPageGuard>
	);
};
export default AppsPage;
