import { Link, useParams } from 'react-router-dom';

interface TabsLinkProps {
	tabs: { name: String; path: string }[];
	path: string;
}

export default function HorizontalTabsLink({ tabs, path }: TabsLinkProps) {
	const { tab: tabName } = useParams();

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
								{tab.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

/*
const tabs = [
	{
		name: 'name',
		path: 'path',
	},
];

<HorizontalTabsLink tabs={tabs} path='/products' />;
*/
