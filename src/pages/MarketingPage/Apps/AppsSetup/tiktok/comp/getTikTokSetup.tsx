import platforms from '../../comp/data.json';
import { ReactNode } from 'react';
import TikBusinessAccount from './tabs/TikBusinessAccount';
import TikCreateAccount from './tabs/TikCreateAccount';
import TikDataSharing from './tabs/TikDataSharing';
import TikTargetLocation from './tabs/TikTargetLocation';
import TikTokPayment from './tabs/TikTokPayment';

interface TikTokSetup {
	title: string;
	content: ReactNode;
}

interface CreateAccount {
	description: string;
	title: string;
}
interface BusinessAccount {
	description: string;
	title: string;
}
interface DataSharing {
	description: string;
	title: string;
}
interface PaymentMethod {
	description: string;
	title: string;
}
interface TargetLocation {
	description: string;
	title: string;
}

interface TikTokSettings {
	create_account: CreateAccount;
	business_account: BusinessAccount;
	data_sharing: DataSharing;
	payment_method: PaymentMethod;
	target_location: TargetLocation;
}

export interface TikTokTabs {
	tikTok_title: string;
	mega_title: string;
	tikTok_settings: TikTokSettings;
	tikTok_tabs: TikTokSetup[];
}

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
