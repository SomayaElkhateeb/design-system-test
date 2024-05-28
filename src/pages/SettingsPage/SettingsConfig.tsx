import { useParams } from 'react-router-dom';
import Shipping from 'src/pages/SettingsPage/Shipping';

import BranchesSettings from './BranchesSettings';

import PaymentSettings from './PaymentSettings/PaymentSettings';
import Users from 'src/pages/SettingsPage/Users';
import GeneralSettings from './GeneralSettings';
import LanguageSettings from './LanguageSettings';
import ReviewsSetting from './ReviewsSettings';
import QueriesSetting from './QueriesSettings';
import CustomizationsSettings from './CustomizationsSettings/CustomizationsSettings';
import TaxesSettings from './Taxes/TaxesSettings';
import EmailNotification from './EmailNotification';


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
