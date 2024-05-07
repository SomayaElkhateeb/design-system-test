import { useParams } from 'react-router-dom';
import GeneralSettings from './GeneralSettings/GeneralSettings';

const SettingsConfig = () => {
	const { config } = useParams();

	switch (config) {
		case 'generalSettings':
			return <GeneralSettings />;
	}
};

export default SettingsConfig;
