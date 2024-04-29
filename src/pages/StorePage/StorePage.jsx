import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import {  HeaderSettings } from 'src/app/components/optimized';

import Tabs from 'src/app/components/page/Customers/Tabs';
import DesignPage from 'src/app/components/page/StorePage/DesignPage';
import PreferencesPage from 'src/app/components/page/StorePage/PreferencesPage';
import ThemesPage from 'src/app/components/page/StorePage/ThemesPage/ThemesPage';
import { getImageUrl } from 'src/app/utils';

const StorePage = () => {
	//  hooks
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();

	//  case of exist searcParams
	const ThemeName = searchParams.get('name');
	const ThemeId = searchParams.get('ThemeId');

	return !ThemeId ? (
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
	) : (
		<div className='flex-col-top-section-pages'>
			<div className='container mx-auto'>
				<HeaderSettings
					variant='settingOneBtn'
					to={-1}
					title={ThemeName}
					btn1={{ text: t('Apply template'), onClick: () => {} }}
				/>
			</div>
			<img
				src={getImageUrl('images/ThemesPage/largewebsiteimg.png')}
				loading='lazy'
				alt='smallwebsiteimg'
			/>
		</div>
	);
};

export default StorePage;
