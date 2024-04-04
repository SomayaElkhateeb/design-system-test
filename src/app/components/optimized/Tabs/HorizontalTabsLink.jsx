import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

/**
 * HorizontalTabsLink renders horizontal tabs with links based on the provided tabs array
 * and the current active tab from the URL parameters.
 *
 * @param {Object} props - Component props.
 * @param {string[]} props.tabs - Array of tab names.
 * @param {string} props.path - Path for the tab links.
 */
const HorizontalTabsLink = ({ tabs, path }) => {
	//  hooks
	const { tab: marketingTab } = useParams();

	const { t } = useTranslation();

	return (
		<div>
			<div className='bg-white border-b border-border-color '>
				<ul className='flex flex-wrap font-medium text-center  ml-[18px]'>
					{tabs.map((tab) => (
						<li key={tab} className='mr-2'>
							<Link
								className={`inline-block p-2 rounded-t-lg  ${
									marketingTab === tab
										? 'text-primary title border-b-2 border-primary'
										: 'text-hint paragraph hover:text-primary'
								}`}
								to={`${path}/${tab}`}
							>
								{t(tab.charAt(0).toUpperCase() + tab.slice(1))}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HorizontalTabsLink;
