import { useParams } from 'react-router-dom';
import AddBranch from 'src/pages/SettingsPage/BranchesSettings/AddBranch/AddBranch';
import PaymentProvidersPage from 'src/pages/SettingsPage/PaymentSettings/PaymentProviders/PaymentProvidersPage';
import ActivateBankTransfer from 'src/pages/SettingsPage/PaymentSettings/BankTransfer/ActivateBankTransfer';
import AddStuff from '../PermissionsAndUsers/AddStaff/AddStaff';
import TransferOwnership from '../PermissionsAndUsers/Owner/TransferOwnership';

export default function Nested_pages_SettingsConfig() {
	const { nested_page } = useParams();

	switch (nested_page) {
		case 'addStuff':
			return <AddStuff />;
		case 'transferOwnership':
			return <TransferOwnership />;
		case 'add-branch':
			return <AddBranch />;
		case 'payment-providers':
			return <PaymentProvidersPage />;
		case 'activate-bank-transfer':
			return <ActivateBankTransfer />;
	}
}
