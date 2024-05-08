import { useTranslation } from 'react-i18next';
import InstallCard from '../AppStore/comp/InstallCard';
import data from '../comp/data.json';

export default function InstalledApps() {
	return (
		<div className='p-5'>
			<InstalledAppsContainer />
		</div>
	);
}

function InstalledAppsContainer() {

	const installedApps = data.appsStore.filter((app) => app.status === 'installed');
	const { t } = useTranslation();
	
	return (
		<div className='grid gap-5 p-5 bg-white border rounded-lg border-borders-lines w-3/4'>
			<h2 className='title text-lg'>
				{t('Installed')} ({15})
			</h2>
			{installedApps.map((app, index) => (
				<InstallCard {...app} key={index} />
			))}
		</div>
	);
}
