import AppsLayout from './comp/AppsLayout';
import AppsPageGuard from './comp/AppsPageGuard';

const AppsPage = () => {
	return (
		<div>
			<AppsPageGuard>
				<AppsLayout />
			</AppsPageGuard>
		</div>
	);
};
export default AppsPage;
