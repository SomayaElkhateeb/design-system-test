import { useTranslation } from 'react-i18next';
import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import { AppReviews, AsksAndQueries, ProductReviews, StoreReviews } from 'src/app/components/page';

const ReviewsPage = () => {
	const { t } = useTranslation();
	return (
		<Tabs
			body={
				<>
					<TabPanel value='1'>
						<ProductReviews />
					</TabPanel>
					<TabPanel value='2'>
						<AsksAndQueries />
					</TabPanel>
					<TabPanel value='3'>
						<StoreReviews />
					</TabPanel>
					<TabPanel value='4'>
						<AppReviews />
					</TabPanel>
				</>
			}
		>
			{/*  children */}
			<Tab label={t('Product Reviews')} value='1' />
			<Tab label={t('Asks & Queries')} value='2' />
			<Tab label={t('Store Reviews')} value='3' />
			<Tab label={t('App Reviews')} value='4' />
		</Tabs>
	);
};

export default ReviewsPage;
