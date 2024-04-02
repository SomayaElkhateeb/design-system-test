import { useParams } from 'react-router-dom';
import { Apps, Campaigns, Coupons, Discounts } from '.';

const MarketingTabs = () => {
	const { tab } = useParams();
	const tabs = {
		apps: <Apps />,
		discounts: <Discounts />,
		coupons: <Coupons />,
		campaigns: <Campaigns />
	};
	return tabs[tab];
};

export default MarketingTabs;
