import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BranchCard from './BranchesPage/BranchCard';
import BranchesFilter from './BranchesPage/FilterBar';
import useBranch, { Branch } from './BranchesPage/useBranch';
import { SubHeader, Button } from 'src/app/components/optimized';

export const branchesData: Branch[] = [
	{
		id: 1,
		name: 'Branch 1',
		address: '123 Main St',
		city: 'City 1',
		country: 'Country 1',
		phone: '123-456-7890',
		isMain: true,
		branchType: 'warehouse',
	},
	{
		id: 2,
		name: 'Branch 2',
		address: '456 Elm St',
		city: 'City 2',
		country: 'Country 2',
		phone: '987-654-3210',
		isMain: false,
		branchType: 'commercialBranch',
	},
];

export default function BranchesSettings() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { filter, filteredData, handleFilterChange } = useBranch(branchesData);

	return (
		<div className='flex-col-global'>
			<div>
				<SubHeader title={t('Branches')}>
					<Button variant='primary' text={t('Add Branch')} onClick={() => navigate('add-branch')} />
				</SubHeader>
				<BranchesFilter onFilterChange={handleFilterChange} filter={filter} />
			</div>
			<div className=' custom_container custom-grid-parent'>
				<div className='flex-col-global gap-5 grid-left'>
					{filteredData.map((branch) => (
						<BranchCard key={branch.id} {...branch} />
					))}
				</div>
			</div>
		</div>
	);
}
