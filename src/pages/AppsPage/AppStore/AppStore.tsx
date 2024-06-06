import { useTranslation } from 'react-i18next';

import data from '../comp/data.json';
import FilterBar from '../comp/FilterBar';
import InstallCard from './comp/InstallCard';
import AllAppsView from '../comp/AllAppsView';
import AppsWrapper from '../comp/AppsWrapper';
import useAppStore from '../comp/useAppStore';
import { AppsCard } from 'src/app/components/optimized';



export default function AppStore() {
	const { t } = useTranslation();
	const {
		filteredApps,
		categoryParam,
		installedApps,
		selectedPrices,
		warningMessage,
		setSelectedPrices,
		selectedCategories,
		handleClickViewAll,
		setSelectedCategories,
	} = useAppStore();

	return (
		<div className='grid gap-5  container'>
			{categoryParam ? (
				<AllAppsView category={categoryParam} socialApps={data.appsStore} />
			) : (
				<>
					<FilterBar
						selectedPrices={selectedPrices}
						setSelectedPrices={setSelectedPrices}
						selectedCategories={selectedCategories}
						setSelectedCategories={setSelectedCategories}
					/>
					<div className='grid global-cards'>
						<AppsWrapper
							title={t('Installed')}
							socialApps={installedApps}
							warningMessage={warningMessage}
							ChildrenComponent={InstallCard}
							onButtonClick={() => handleClickViewAll('installed')}
						/>
					</div>
					<AppsWrapper
						title={t('Popular')}
						socialApps={filteredApps}
						ChildrenComponent={AppsCard}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('popular')}
					/>
					<AppsWrapper
						title={t('Recommended')}
						socialApps={filteredApps}
						ChildrenComponent={AppsCard}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('recommended')}
					/>
					<AppsWrapper
						title={t('Sales')}
						socialApps={filteredApps}
						ChildrenComponent={AppsCard}
						warningMessage={warningMessage}
						onButtonClick={() => handleClickViewAll('sales')}
					/>
				</>
			)}
		</div>
	);
}
