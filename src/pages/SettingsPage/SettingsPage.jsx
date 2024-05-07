import { useEffect, useState } from 'react';
import { TrialBanner } from 'src/app/components/optimized';
import { settingsCards } from './comp/data';
import LinkCards from 'src/app/components/optimized/Cards/LinkCards';
import SettingsLoading from 'src/app/components/page/SchimmerLoading/SettingsLoading';
import GeneralSettings from './comp/GeneralSettings/GeneralSettings';

/**
 * SettingsPage component represents the settings page of the application.
 * It displays a trial banner and a set of settings cards.
 *
 * @returns {JSX.Element} SettingsPage component.
 */
const SettingsPage = () => {
	// State to manage loading state
	const [showLoading, setShowLoading] = useState(true);

	// Simulate loading of the settings page
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		// Clear the timer on component unmount
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{/* Display loading screen while loading */}
			{showLoading ? (
				<SettingsLoading />
			) : (
				<div className='w-full px-4 py-6 flex flex-col gap-6'>
					<TrialBanner
						free={false}
						daysLeft={5}
						title='You’re on free trial'
						description='Subscribe now and open a world with no boundaries'
					/>
					<div className='grid grid-cols-4 gap-6'>
						{settingsCards.map((card) => {
							return <LinkCards key={card.id} {...card} />;
						})}
					</div>
				</div>
			)}
		</>
		// <GeneralSettings />
	);
};

export default SettingsPage;
