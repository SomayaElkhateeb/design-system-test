import { useParams } from 'react-router-dom';
import { AddCoupon, NewCampaign, NewDiscount, PlatformSetup } from '.';

const MarketingConfig = () => {
	const { config } = useParams();

	const platform = config.slice(0, config.indexOf('-'));
	const platformKey = `${platform}-setup`;

	const tabs = {
		addDiscount: <NewDiscount />,
		addCoupon: <AddCoupon />,
		addCampaign: <NewCampaign />,
		[platformKey]: <PlatformSetup platform={platform} />,
	};

	return tabs[config];
};

export default MarketingConfig;
