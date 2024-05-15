import { useParams } from 'react-router-dom';
import Shipping from 'src/pages/SettingsPage/Shipping';

import BranchesSettings from './BranchesSettings';

import Users from 'src/pages/SettingsPage/Users';
import GeneralSettings from './GeneralSettings';
import LanguageSettings from './LanguageSettings';
import ReviewsSetting from './ReviewsSettings';
import QueriesSetting from './QueriesSettings';

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

		case 'language':
			return <LanguageSettings />;

		case 'reviews':
			return <ReviewsSetting />;
			case 'queries':
			return <QueriesSetting />;
	}
};

export default SettingsConfig;
