import platforms from '../../comp/data.json';
import TikBusinessAccount from './tabs/TikBusinessAccount';
import TikCreateAccount from './tabs/TikCreateAccount';
import TikDataSharing from './tabs/TikDataSharing';
import TikTargetLocation from './tabs/TikTargetLocation';
import TikTokPayment from './tabs/TikTokPayment';
import { TikTokSetup, TikTokTabs } from './tikTokTypes';


export const getTikTokSetup = (platform: string): TikTokTabs | null => {
	const platformData = platforms[platform];

	if (!platformData) return null;

	const { tikTok_title, mega_title, tikTok_settings } = platformData;
	const { create_account, business_account, data_sharing, payment_method, target_location } = tikTok_settings;

	const tikTok_tabs: TikTokSetup[] = [
		{
			title: create_account.title,
			content: <TikCreateAccount data={create_account} />,
		},
		{
			title: business_account.title,
			content: <TikBusinessAccount data={business_account} />,
		},
		{
			title: data_sharing.title,
			content: <TikDataSharing data={data_sharing} />,
		},
		{
			title: payment_method.title,
			content: <TikTokPayment data={payment_method} />,
		},
		{
			title: target_location.title,
			content: <TikTargetLocation data={target_location} />,
		},
	];

	return { tikTok_title, mega_title, tikTok_settings, tikTok_tabs };
};
