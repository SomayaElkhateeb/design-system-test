import { useParams } from 'react-router-dom';
import InstalledApps from '../InstalledApps/InstalledApps';
import AppStore from '../AppStore/AppStore';

export default function AppsTabs() {
	const { tab } = useParams();

	switch (tab) {
		case 'app_store':
			return <AppStore />;
		case 'installed_apps':
			return <InstalledApps />;
		default:
			return <AppStore />;
	}
}
