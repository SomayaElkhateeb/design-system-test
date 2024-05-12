import { useParams } from 'react-router-dom';

import BranchesSettings from './BranchesSettings';

import GeneralSettings from '../../app/components/page/SettingPage/GeneralSettings/GeneralSettings';
import Users from 'src/app/components/page/SettingPage/PermissionsAndUsers/Users';

const SettingsConfig = () => {
	const { config } = useParams();

	switch (config) {
		case 'general':
			return <GeneralSettings />;

		case 'branches':
			return <BranchesSettings />;

		case 'users':
			return <Users />;
	}
};

export default SettingsConfig;
