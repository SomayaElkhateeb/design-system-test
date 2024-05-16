import { TrialBanner } from 'src/app/components/optimized';
import { settingsCards } from './data';
import LinkCards from 'src/app/components/optimized/Cards/LinkCards';
import { Outlet, useLocation, useParams } from 'react-router-dom';

/**
 * SettingsPage component represents the settings page of the application.
 * It displays a trial banner and a set of settings cards.
 *
 * @returns {JSX.Element} SettingsPage component.
 */
const SettingsPage = () => {
		return (
			<div className='flex-col-top-section-pages container mx-auto'>
				<TrialBanner
					free={false}
					daysLeft={5}
					title='You’re on free trial'
					description='Subscribe now and open a world with no boundaries'
				/>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{settingsCards.map((card) => (
						<LinkCards key={card.id} {...card} />
					))}
				</div>
			</div>
		);

};

export default SettingsPage;

// const SettingsPage = () => {
// 	const { pathname } = useLocation();

// 	// console.log(pathname);
// 	if (pathname === '/settings') {
// 		return (
// 			<div className='flex-col-top-section-pages container mx-auto'>
// 				<TrialBanner
// 					free={false}
// 					daysLeft={5}
// 					title='You’re on free trial'
// 					description='Subscribe now and open a world with no boundaries'
// 				/>

// 				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
// 					{settingsCards.map((card) => (
// 						<LinkCards key={card.id} {...card} />
// 					))}
// 				</div>
// 			</div>
// 		);
// 	} else {
// 		return (
// 			<main>
// 				<Outlet />
// 			</main>
// 		);
// 	}
// };