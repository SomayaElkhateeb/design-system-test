import data from '../comp/data.json';
import FilterBar from '../comp/FilterBar';
import AllAppsView from '../comp/AllAppsView';
import InstallCardWrapper from './comp/InstallCardWrapper';
import SocialAppsWrapper from '../comp/SocialAppsWrapper';
import useAppStore from '../comp/useAppStore';

export default function AppStore() {
	const {
		filteredApps,
		categoryParam,
		installedApps,
		selectedPrices,
		warningMessage,
		selectedCategories,
		setSelectedPrices,
		handleClickViewAll,
		setSelectedCategories,
	} = useAppStore();

	return (
		<div className='grid gap-5 p-6'>
			{categoryParam ? (
				<AllAppsView category={categoryParam} socialApps={data.appsStore} />
			) : (
				<>
					<FilterBar
						selectedCategories={selectedCategories}
						selectedPrices={selectedPrices}
						setSelectedCategories={setSelectedCategories}
						setSelectedPrices={setSelectedPrices}
					/>
					<InstallCardWrapper
						title='Installed'
						socialApps={installedApps}
						onButtonClick={() => handleClickViewAll('installed')}
					/>
					<SocialAppsWrapper
						title='Popular'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('popular')}
					/>
					<SocialAppsWrapper
						title='Recommended'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('recommended')}
					/>
					<SocialAppsWrapper
						title='Sales'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('sales')}
					/>
				</>
			)}
		</div>
	);
}
