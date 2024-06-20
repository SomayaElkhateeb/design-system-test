import { useTranslation } from 'react-i18next';
import data from '../comp/data.json';
import InstallCard from './comp/InstallCard';
import AllAppsView from '../comp/AllAppsView';
import AppsWrapper from '../comp/AppsWrapper';
import useAppStore from '../comp/useAppStore';
import { AppsCard } from 'src/app/components/optimized';
import CategoryButton from 'src/app/components/optimized/Buttons/CategoryButton';
import PriceButton from 'src/app/components/optimized/Buttons/PriceButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';

export default function AppStore() {
	const { t } = useTranslation();
	const { selectedOption, handleSelect } = useSelectBox();

	const Categories = [
		{ id: nanoid(), text: t('Marketing') },
		{ id: nanoid(), text: t('Sales') },
		{ id: nanoid(), text: t('Support') },
		{ id: nanoid(), text: t('Chat') },
		{ id: nanoid(), text: t('Service') },
		{ id: nanoid(), text: t('Design') },
	];
	const prices = [
		{ id: nanoid(), text: t('Free') },
		{ id: nanoid(), text: t('Paid') },
	];
	const { filteredApps, categoryParam, installedApps, warningMessage, handleClickViewAll } =
		useAppStore();

	return (
		<div className='flex flex-col gap-4'>
			{categoryParam ? (
				<AllAppsView category={categoryParam} socialApps={data.appsStore} /> //??
			) : (
				<div className='p-5 flex flex-col gap-5'>
					<div className='flex gap-4'>
						<CategoryButton
							sortMenus={Categories}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
						<PriceButton
							sortMenus={prices}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
					<div className='global-cards'>
						<AppsWrapper
							cards
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
				</div>
			)}
		</div>
	);
}
