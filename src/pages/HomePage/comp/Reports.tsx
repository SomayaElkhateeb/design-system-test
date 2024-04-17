import { useState } from 'react';
import { Button, Menu } from 'src/app/components/optimized';
import SlideCard from 'src/pages/HomePage/comp/comp/SlideCard';
import { DownIcon } from 'src/app/utils/icons';
import { slidesContent, sortMenus } from '../data';
import { useTranslation } from 'react-i18next';

const Reports = () => {
	const { t } = useTranslation();
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Today');

	const handleSelect = (selectedOption: string) => {
		setSelectedOption(selectedOption);
	};

	return (
		<div className='bg-white rounded-xl border p-5 border-borders-lines h-96'>
			<header className='flex justify-between items-center mb-2'>
				<h2 className='text-title font-semibold text-lg'>{t('Reports')}</h2>

				<>
					<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
						{selectedOption}
					</Button>
					{menu && <Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
				</>
			</header>

			<SlideCard slides={slidesContent} />
		</div>
	);
};

export default Reports;
