import { useParams } from 'react-router-dom';
import AddBranch from '../BranchesSettings/AddBranch/AddBranch';

export default function AddSettings() {
	const { add } = useParams();
	switch (add) {
		case 'add-branch':
			return <AddBranch />;
	}
}
