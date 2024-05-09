import { useParams } from 'react-router-dom';
import GeneralSettings from './GeneralSettings/GeneralSettings';
import Users from './GeneralSettings/Users';

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
