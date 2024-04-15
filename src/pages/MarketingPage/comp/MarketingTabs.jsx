import { useParams } from 'react-router-dom';
import { Apps, Campaigns, Coupons } from '.';
import Discounts from '../Discounts/Discounts';

const MarketingTabs = () => {
	const { tabName } = useParams();
	console.log(tabName)
	const tabs = {
		apps: <Apps />,
		discounts: <Discounts />,
		coupons: <Coupons />,
		campaigns: <Campaigns />,
	};
	return tabs[tabName];
};

export default MarketingTabs;
