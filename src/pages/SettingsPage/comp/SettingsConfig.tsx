import { useParams } from 'react-router-dom';
import GeneralSettings from './GeneralSettings/GeneralSettings';
import BranchesSettings from '../BranchesSettings/BranchesSettings';

const SettingsConfig = () => {
	const { config } = useParams();
	console.log(config)
	switch (config) {
		case 'general':
			return <GeneralSettings />;
		case 'branches':
			return <BranchesSettings />;
	}
};

export default SettingsConfig;
