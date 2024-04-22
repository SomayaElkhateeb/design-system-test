import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

/**
 *
 * @param {Object} props - Component props.
 * @param {string[]} props.tabs - Array of tab names.
 * @param {string} props.path - Path for the tab links.
 *
 * @description
 * HorizontalTabsLink renders horizontal tabs with links based on the provided tabs array,
 * and the current active tab from the URL parameters.
 */

export default function HorizontalTabsLink(props) {
	//  hooks
	const { tab: tabName } = useParams();

	const { t } = useTranslation();

	/**@param {string} tab */
	const handelTabs = (tab) => {
		if (!tabName?.includes('orders')) {
			return (
				<>
					{tab !== 'AllProducts'
						? t(tab.charAt(0).toUpperCase() + tab.slice(1))
						: t('All Products')}
				</>
			);
		} else {
			return;
			<p>{t(tab.charAt(0).toUpperCase() + tab.slice(1))}</p>;
		}
	};
	return (
		<div>
			<div className='bg-white border-b border-border-color '>
				<ul className='flex flex-wrap font-medium text-center  ml-[18px]'>
					{props.tabs.map((tab) => (
						<li key={tab} className='mr-2'>
							<Link
								className={`inline-block p-2 rounded-t-lg  ${
									tabName === tab
										? 'text-primary title border-b-2 border-primary'
										: 'text-hint paragraph hover:text-primary'
								}`}
								to={`${props.path}/${tab}`}
							>
								{handelTabs(tab)}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
