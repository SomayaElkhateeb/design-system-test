import { useParams } from 'react-router-dom';
import ThemesPage from './_comp/ThemesPage/ThemesPage';
import DesignPage from './_comp/DesignPage/DesignPage';
import PreferencesPage from './_comp/PreferncesPage/PreferencesPage';

const StoreTabs = () => {
	//  hooks
	const { tab } = useParams();

	switch (tab) {
		case 'theme':
			return <ThemesPage />;

		case 'design':
			return <DesignPage />;
		case 'prefernces':
			return <PreferencesPage />;

		default:
			return <ThemesPage />;
	}
};

export default StoreTabs;
