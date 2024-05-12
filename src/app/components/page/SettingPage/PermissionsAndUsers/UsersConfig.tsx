import { useParams } from 'react-router-dom';
import AddStuff from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStuff/AddStuff';
import TransferOwnership from 'src/app/components/page/SettingPage/PermissionsAndUsers/Owner/TransferOwnership';

export default function UsersConfig() {
	const { config } = useParams();

	switch (config) {
		case 'addStuff':
			return <AddStuff />;
		case 'transferOwnership':
			return <TransferOwnership />;
	}
}
