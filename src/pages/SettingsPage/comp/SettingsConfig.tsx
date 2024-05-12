import { useParams } from 'react-router-dom';
import BranchesSettings from '../BranchesSettings/BranchesSettings';
import GeneralSettings from '../../../app/components/page/SettingPage/GeneralSettings/GeneralSettings';
import Users from 'src/app/components/page/SettingPage/PermissionsAndUsers/Users';
import Shipping from 'src/app/components/page/SettingPage/Shipping/Shipping';

const SettingsConfig = () => {
	const { config } = useParams();

	switch (config) {
		case 'general':
			return <GeneralSettings />;

		case 'branches':
			return <BranchesSettings />;

		case 'users':
			return <Users />;

		case 'shipping':
			return <Shipping />;
	}
};

export default SettingsConfig;
