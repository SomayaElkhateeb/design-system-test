import { useParams } from 'react-router-dom';
import GeneralSettings from '../../../app/components/page/SettingPage/GeneralSettings/GeneralSettings';
import Users from 'src/app/components/page/SettingPage/PermissionsAndUsers/Users';

const SettingsConfig = () => {
	const { config } = useParams();

	switch (config) {
		case 'generalSettings':
			return <GeneralSettings />;
		case 'users':
			return <Users />;
	}
};

export default SettingsConfig;
