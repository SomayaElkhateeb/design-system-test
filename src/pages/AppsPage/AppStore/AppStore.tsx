import data from '../comp/data.json';
import FilterBar from '../comp/FilterBar';
import AllAppsView from '../comp/AllAppsView';
import AppsWrapper from '../comp/AppsWrapper';
import useAppStore from '../comp/useAppStore';
import AppsCard from 'src/app/components/page/Cards/AppsCard';
import InstallCard from './comp/InstallCard';

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
					<div className='grid bg-white p-4 rounded-md border border-borders-lines'>
						<AppsWrapper
							title='Popular'
							socialApps={installedApps}
							warningMessage={warningMessage}
							onButtonClick={() => handleClickViewAll('installed')}
							ChildrenComponent={InstallCard}
						/>
					</div>
					<AppsWrapper
						title='Popular'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('popular')}
						ChildrenComponent={AppsCard}
					/>
					<AppsWrapper
						title='Recommended'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('recommended')}
						ChildrenComponent={AppsCard}
					/>
					<AppsWrapper
						title='Sales'
						socialApps={filteredApps}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('sales')}
						ChildrenComponent={AppsCard}
					/>
				</>
			)}
		</div>
	);
}
