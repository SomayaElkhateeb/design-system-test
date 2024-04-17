import { useState } from 'react';
import { Button, InputRow, Menu } from 'src/app/components/optimized';
import CustomDetails from 'src/pages/HomePage/comp/comp/CustomDetails';
import { DownIcon, SearchIcon } from 'src/app/utils/icons';
import { data, sortMenus } from '../data';
import { useTranslation } from 'react-i18next';

const Orders = () => {
	const { t } = useTranslation();
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Today');

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	return (
		<section className='border border-constrained bg-white rounded-xl p-4 h-96 '>
			<header className='flex justify-between items-center'>
				<h2 className='text-title font-semibold text-lg'>{t('Latest Orders')}</h2>

				<div className='flex justify-between items-center gap-4'>
					<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
						{selectedOption}
					</Button>
					{menu && <Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
					<InputRow leftIcon={<SearchIcon />} placeholder='Search' />
				</div>
			</header>

			<CustomDetails data={data} />
		</section>
	);
};

export default Orders;
