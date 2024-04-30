import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Tabs from 'src/app/components/page/Customers/Tabs';
import BlogPosts from 'src/app/components/page/PagesPage/BlogPosts/BlogPosts';
import NavigationSection from 'src/app/components/page/PagesPage/Navigation/NavigationSection';
import PagesPagesSection from 'src/app/components/page/PagesPage/PagesSection/PagesPagesScetion';

const PagesPage = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate=useNavigate()
	return (
		<Tabs
			body={
				<>
					<TabPanel value='1'><PagesPagesSection/></TabPanel>
					<TabPanel value='2'><NavigationSection/></TabPanel>
					<TabPanel value='3'>
						<BlogPosts />
					</TabPanel>
				</>
			}
		>
			{/*  children */}
			<Tab onClick={()=>navigate("/pages?tab=pages")} label={t('Pages')} value='1' />
			<Tab onClick={()=>navigate("/pages?tab=navigation")} label={t('Navigation')} value='2' />
			<Tab onClick={()=>navigate("/pages?tab=blogPosts")} label={t('Blog posts')} value='3' />
		</Tabs>
	);
};
export default PagesPage;
