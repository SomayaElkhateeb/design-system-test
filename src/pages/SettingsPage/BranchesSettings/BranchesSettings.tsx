import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BranchCard from './BranchesPage/BranchCard';
import BranchesFilter from './BranchesPage/FilterBar';
import useBranch from './BranchesPage/useBranch';
import { SubHeader, Button } from 'src/app/components/optimized';
import { BranchesApi } from 'src/app/React-Query/BranchesApi';
import { useQuery } from 'react-query';

export default function BranchesSettings() {
	//  hooks
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();

	// data query
	const { data } = useQuery([`branchesData`], () => BranchesApi.branches());
	let BranchesData = data?.data?.data;
	console.log('BranchesData', BranchesData)
	const { filter, filteredData, handleFilterChange } = useBranch(BranchesData);

	const currentLocale = i18n.language; // en
	console.log('currentLocale', currentLocale)

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
					{filteredData?.map((branch) => (
						<BranchCard key={branch.id} data={branch} currentLocale={currentLocale} />
					))}
				</div>
			</div>
		</div>
	);
}
