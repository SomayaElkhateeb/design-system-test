import { useParams } from 'react-router-dom';
import { AddCoupon, NewCampaign, NewDiscount, PlatformSetup } from '.';
import CampainElement from '../CampainElement/CampainElement';

const MarketingConfig = () => {
	const { config } = useParams();

	const platform = config && config.slice(0, config.indexOf('-'));
	const platformKey = `${platform}-setup`;

	const campaignElement: number | string = Number(config);

	switch (config) {
		case 'addDiscount':
			return <NewDiscount />;
		case 'addCoupon':
			return <AddCoupon />;
		case 'addCampaign':
			return <NewCampaign />;
		case platformKey:
			return <PlatformSetup platform={platform} />;
		default:
			return <CampainElement />;
	}
};

export default MarketingConfig;
