import { useParams } from 'react-router-dom';
import { AddCoupon, NewDiscount, PlatformSetup } from '.';

const MarketingConfig = () => {
	const { config } = useParams();

	const platform = config.slice(0, config.indexOf('-'));
	const platformKey = `${platform}-setup`;

	const tabs = {
		addDiscount: <NewDiscount />,
		addCoupon: <AddCoupon />,
		[platformKey]: <PlatformSetup platform={platform} />,
	};

	return tabs[config];
};

export default MarketingConfig;
