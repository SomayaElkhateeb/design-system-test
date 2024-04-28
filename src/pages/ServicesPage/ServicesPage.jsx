import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Button, HeaderSettings } from 'src/app/components/optimized';

import Tabs from 'src/app/components/page/Customers/Tabs';
import DesignPage from 'src/app/components/page/StorePage/DesignPage';
import PreferencesPage from 'src/app/components/page/StorePage/PreferencesPage';
import ThemesPage from 'src/app/components/page/StorePage/ThemesPage/ThemesPage';
import { getImageUrl } from 'src/app/utils';

const ServicesPage = () => {
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
