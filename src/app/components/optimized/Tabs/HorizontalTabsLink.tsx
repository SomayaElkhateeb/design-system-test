import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface TabsLinkProps {
	tabs: { name: string; path: string }[];
	path?: string;
}

export default function HorizontalTabsLink({ tabs, path }: TabsLinkProps) {
	const { tab: tabName } = useParams<{ tab: string }>();
	const { t } = useTranslation();

	return (
		<div>
			<div className='bg-white border-b border-borders-lines '>
				<ul className='flex flex-wrap font-medium text-center  ms-[18px]'>
					{tabs.map((tab) => (
						<li key={tab.path} className='mr-2'>
							<Link
								className={`inline-block p-2 rounded-t-lg  ${
									tabName === tab.path
										? 'text-primary title border-b-2 border-primary'
										: 'text-hint paragraph hover:text-primary'
								}`}
								to={`${path}/${tab.path}`}
							>
								{t(tab.name)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
