import { useParams } from 'react-router-dom';
import Shipping from 'src/app/components/page/SettingPage/Shipping/Shipping';

import BranchesSettings from './BranchesSettings';

import GeneralSettings from '../../app/components/page/SettingPage/GeneralSettings/GeneralSettings';
import Users from 'src/app/components/page/SettingPage/PermissionsAndUsers/Users';
import PaymentSettings from './PaymentSettings/PaymentSettings';

const SettingsConfig = () => {
	const { config } = useParams();
	switch (config) {
		case '/settings/general':
			return <GeneralSettings />;

		case 'branches':
			return <BranchesSettings />;

		case 'users':
			return <Users />;

		case 'shipping':
			return <Shipping />;
		case 'payment':
			return <PaymentSettings />;
	}
};

export default SettingsConfig;
