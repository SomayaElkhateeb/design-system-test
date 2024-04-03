import platforms from '../comp/data.json';
import GoConnectAccount from './tabs/GoConnectAccount';
import GooglePayment from './tabs/GooglePayment';

export const useGoogleSetup = (platform) => {
	const { google_settings, google_title } = platforms[platform];
	const { connect_account, payment_method } = google_settings;

	const google_tabs = [
		{
			title: connect_account.title,
			content: <GoConnectAccount data={connect_account} />
		},
		{
			title: payment_method.title,
			content: <GooglePayment data={payment_method} />
		}
	];

	return { google_title, google_tabs };
};
