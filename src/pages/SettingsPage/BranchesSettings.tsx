import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { AddBgIcon, EditIcon, NextIcon, RemoveIcon, ViewIcon } from 'src/app/utils/icons';
import { Button } from 'src/app/components/optimized';
interface Branch {
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
	return (
		<>
			<Header />
			<div className='grid grid-cols-3 p-5 '>
				<div className='grid gap-5 col-span-3 lg:col-span-2'>
					{demoData.map((branch) => (
						<BranchCard key={branch.id} {...branch} />
					))}
				</div>
			</div>
		</>
	);
}

const Header = () => {
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex justify-between px-4 py-3 bg-white'>
			<div className='flex items-center'>
				<Link to='..' relative='path'>
					<NextIcon className={`fill-pri-dark ${language === 'ar' ? '' : 'rotate-180'}`} />
				</Link>
				<h2 className='text-lg font-semibold capitalize text-pri-dark'>Branches</h2>
			</div>
			<Button
				variant='primary'
				LeftIcon={AddBgIcon}
				text={t('Add Branch')}
				onClick={() => navigate('add-branch')}
			/>
		</div>
	);
};

const BranchCard = ({ name, address, city, country, phone }: Branch) => {
	return (
		<div className='bg-white rounded-lg p-4 flex justify-between border border-borders-lines'>
			<div className='space-y-1'>
				<h2 className='title mb-2'>{name}</h2>
				<p className='paragraph'>{address}</p>
				<p className='paragraph'>{city}</p>
				<p className='paragraph text-subtitle'>{country}</p>
				<p className='paragraph'>{phone}</p>
			</div>
			<div className='flex flex-col justify-between items-end'>
				<div className='flex items-center gap-5 '>
					<div>
						<RemoveIcon className='fill-pri-dark cursor-pointer' />
					</div>
					<div>
						<EditIcon className='fill-pri-dark cursor-pointer' />
					</div>
				</div>
				<Button variant='tertiary' text='View inventory' LeftIcon={ViewIcon} />
			</div>
		</div>
	);
};
