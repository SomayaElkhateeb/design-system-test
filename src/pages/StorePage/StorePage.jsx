import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Tabs from 'src/app/components/page/Customers/Tabs';
import DesignPage from 'src/app/components/page/StorePage/DesignPage';
import PreferencesPage from 'src/app/components/page/StorePage/PreferencesPage';
import ThemesPage from 'src/app/components/page/StorePage/ThemesPage/ThemesPage';

const StorePage = () => {
	//  hooks
	const { t } = useTranslation();
	return (
		<Tabs
			body={
				<>
					<TabPanel value='1'>
						<ThemesPage />
					</TabPanel>
					<TabPanel value='2'>
						<DesignPage />
					</TabPanel>
					<TabPanel value='3'>
						<PreferencesPage />
					</TabPanel>
				</>
			}
		>
			{/*  children */}
			<Tab label={t('Themes')} value='1' />
			<Tab label={t('Design')} value='2' />
			<Tab label={t('Preferences')} value='3' />
		</Tabs>
	);
};

export default StorePage;
