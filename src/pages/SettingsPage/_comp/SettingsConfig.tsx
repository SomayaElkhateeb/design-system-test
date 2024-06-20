import { useParams } from 'react-router-dom';
import Shipping from 'src/pages/SettingsPage/_comp/Shipping';

import BranchesSettings from './BranchesSettings';

import PaymentSettings from '../PaymentSettings/PaymentSettings';
import Users from 'src/pages/SettingsPage/_comp/Users';
import GeneralSettings from './GeneralSettings';
import LanguageSettings from './LanguageSettings';
import ReviewsSetting from './ReviewsSettings';
import QueriesSetting from './QueriesSettings';
import CustomizationsSettings from '../CustomizationsSettings/CustomizationsSettings';

import EmailNotification from './EmailNotification';
import TaxesSettings from './TaxesSettings';

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
		case 'payment':
			return <PaymentSettings />;
		case 'language':
			return <LanguageSettings />;
		case 'reviews':
			return <ReviewsSetting />;
		case 'queries':
			return <QueriesSetting />;
		case 'customizations':
			return <CustomizationsSettings />;
		case 'taxes':
			return <TaxesSettings />;
		case 'notification':
			return <EmailNotification />;
	}
};

export default SettingsConfig;