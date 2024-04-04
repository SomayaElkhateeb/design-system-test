import { ReactNode } from 'react';

interface Partner {
	id: string;
	name: string;
	is_connected: boolean;
}

export interface TikBusinessAccountProps {
	data: {
		description: string;
		partners: Partner[];
	};
}
export interface TikCreateAccountProps {
	data: {
		description: string;
	};
}

export interface TikDataSharingProps {
	data: {
		description: string;
	};
}

interface LocationData {
	description: string;
	location: string[];
}

export interface TikTargetLocationProps {
	data: LocationData;
}

export interface TikTokPaymentProps {
	data: {
		description: string;
	};
}

export interface TikTokCardProps {
	partnerImage: string;
	partnerName: string;
	partnerStatus: boolean;
	userId: string;
}

export interface TikTokSetupProps {
	platform: string;
}

export interface TikTokSetup {
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
