import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Tabs from 'src/app/components/page/Customers/Tabs';
import BlogPosts from 'src/app/components/page/PagesPage/BlogPosts/BlogPosts';
import NavItemPage from 'src/app/components/page/PagesPage/Navigation/NavItemPage';
import NavigationSection from 'src/app/components/page/PagesPage/Navigation/NavigationSection';
import PagesPagesSection from 'src/app/components/page/PagesPage/PagesSection/PagesPagesScetion';

const PagesPage = () => {
	//  hooks
	const { t } = useTranslation();

	const [searchParams] = useSearchParams();

	const id = searchParams.get('id');
	const tab = searchParams.get('tab');

	const handelPageWithSeacrhParams = () => {
		if (id && tab === 'navigation') {
			return <NavItemPage />;
		} else {
			return (
				<Tabs
					body={
						<>
							<TabPanel value={'1'}>
								<PagesPagesSection />
							</TabPanel>
							<TabPanel value={'2'}>
								<NavigationSection />
							</TabPanel>
							<TabPanel value={'3'}>
								<BlogPosts />
							</TabPanel>
						</>
					}
				>
					{/*  children */}
					<Tab label={t('Pages')} value={'1'} />
					<Tab label={t('Navigation')} value={'2'} />
					<Tab label={t('Blog posts')} value={'3'} />
				</Tabs>
			);
		}
	};
	return <>{handelPageWithSeacrhParams()}</>;
};

export default PagesPage;
