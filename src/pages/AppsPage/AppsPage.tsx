import AppsLayout from './comp/AppsLayout';
import AppsPageGuard from './comp/AppsPageGuard';

const AppsPage = () => {
	return (
		<AppsPageGuard>
			<AppsLayout />
		</AppsPageGuard>
	);
};
export default AppsPage;
