import { useParams } from 'react-router-dom';
import AddStuff from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStuff/AddStuff';
import TransferOwnership from 'src/app/components/page/SettingPage/PermissionsAndUsers/Owner/TransferOwnership';
import AddBranch from 'src/app/components/page/SettingPage/BranchesSettings/AddBranch/AddBranch';

export default function Nested_pages_SettingsConfig() {
	const { nested_page } = useParams();

	switch (nested_page) {
		case 'addStuff':
			return <AddStuff />;
		case 'transferOwnership':
			return <TransferOwnership />;
		case 'transferOwnership':
			return <TransferOwnership />;
		case 'add-branch':
			return <AddBranch />;
	}
}
