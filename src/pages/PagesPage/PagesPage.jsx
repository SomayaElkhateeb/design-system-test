import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tabs from 'src/app/components/page/Customers/Tabs';
import BlogPosts from 'src/app/components/page/PagesPage/BlogPosts/BlogPosts';
import PagesPagesSection from 'src/app/components/page/PagesPage/PagesSection/PagesPagesScetion';

const PagesPage = () => {
	//  hooks
	const { t } = useTranslation();
	return (
		<Tabs
			body={
				<>
					<TabPanel value='1'><PagesPagesSection/></TabPanel>
					<TabPanel value='2'></TabPanel>
					<TabPanel value='3'>
						<BlogPosts />
					</TabPanel>
				</>
			}
		>
			{/*  children */}
			<Tab label={t('Pages')} value='1' />
			<Tab label={t('Navigation')} value='2' />
			<Tab label={t('Blog posts')} value='3' />
		</Tabs>
	);
};
export default PagesPage;
