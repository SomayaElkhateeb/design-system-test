import AppsCard from 'src/app/components/page/Cards/AppsCard';
import { AppData } from './useAppStore';

interface AllAppsViewProps {
	category: string;
	socialApps: AppData[];
}
export default function AllAppsView({ category, socialApps }: AllAppsViewProps) {
	return (
		<div className='grid gap-5'>
			<h2 className='title'>All {category} Apps</h2>
			<div className='grid gap-5 grid-cols-1  lg:grid-cols-3  md:grid-cols-2'>
				{socialApps.map((app) => (
					<div key={app.id} className=''>
						<AppsCard {...app} />
					</div>
				))}
			</div>
		</div>
	);
}
