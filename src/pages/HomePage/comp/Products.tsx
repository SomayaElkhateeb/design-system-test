import { useState } from 'react';
import { Button, Menu } from 'src/app/components/optimized';
import SlideCardTabs from 'src/pages/HomePage/comp/comp/SlideCardTabs';
import { DownIcon } from 'src/app/utils/icons';
import { slidesTabs, sortMenus } from '../data';
import { useTranslation } from 'react-i18next';

const Products = () => {
	const { t } = useTranslation();
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Today');

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	return (
		<div className='bg-white rounded-xl border border-borders-lines p-5 h-96 flex flex-col'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{t('Products')}</h2>

				<>
					<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
						{selectedOption}
					</Button>
					{menu && <Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
				</>
			</header>

			<SlideCardTabs slides={slidesTabs} />
		</div>
	);
};

export default Products;
