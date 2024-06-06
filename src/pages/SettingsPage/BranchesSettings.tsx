import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import BranchCard from 'src/app/components/page/SettingPage/BranchesSettings/BranchesPage/BranchCard';
export interface Branch {
	id: number;
	name: string;
	address: string;
	city: string;
	country: string;
	phone: string;
}
const demoData: Branch[] = [
	{
		id: 1,
		name: 'Branch 1',
		address: '123 Main St',
		city: 'City 1',
		country: 'Country 1',
		phone: '123-456-7890',
	},
	{
		id: 2,
		name: 'Branch 2',
		address: '456 Elm St',
		city: 'City 2',
		country: 'Country 2',
		phone: '987-654-3210',
	},
];

export default function BranchesSettings() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings
				btn1={{
					text: t('Add Branch'),
					onClick: () => {
						navigate('add-branch');
					},
				}}
				variant='settingOneBtn'
				title={t('Branches')}
			/>
			<div className='grid grid-cols-3  container mx-auto'>
				<div className='grid gap-5 col-span-3 lg:col-span-2'>
					{demoData.map((branch) => (
						<BranchCard key={branch.id} {...branch} />
					))}
				</div>
			</div>
		</div>
	);
}
