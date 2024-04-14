import { useParams } from 'react-router-dom';
import { Apps, Campaigns, Coupons } from '.';
import Discounts from '../Discounts/Discounts';

const MarketingTabs = () => {
	const { tab } = useParams();
	console.log(tab)
	const tabs = {
		apps: <Apps />,
		discounts: <Discounts />,
		coupons: <Coupons />,
		campaigns: <Campaigns />,
	};
	return tabs[tab];
};

export default MarketingTabs;
