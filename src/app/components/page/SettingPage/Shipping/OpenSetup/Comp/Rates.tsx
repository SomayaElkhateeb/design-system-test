import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AiOutlineQuestion } from 'react-icons/ai';
import Tab from 'src/app/components/optimized/Tabs/Tab';
import General from '../Tabs/General';
import SaudiArabia from '../Tabs/SaudiArabia';
import GulfAndEgypt from '../Tabs/GulfAndEgypt';
import EuropeAndUS from '../Tabs/EuropeAndUS';

export default function Rates({ addStyle }: { addStyle: boolean }) {
	const { t } = useTranslation();
	const [activeIndex, setActiveIndex] = useState(0);

	const slidesTabs = [
		{ title: t('General'), content: <General /> },
		{
			title: t('Saudi Arabia'),
			content: <SaudiArabia />,
		},
		{
			title: t('Gulf & Egypt'),
			content: <GulfAndEgypt />,
		},
		{
			title: t('Europe & US'),
			content: <EuropeAndUS />,
		},
	];

	return (
		<div className={addStyle ? 'cardDetails-sharedClass p-5 flex flex-col gap-4' : ''}>
			{addStyle === false && <hr className='pb-5' />}
			<h3 className='text-title font-semibold flex gap-2 items-center'>
				{t('Rates(2)')}
				<span className='bg-secondary rounded-full size-[18px] flex items-center justify-center cursor-pointer'>
					<AiOutlineQuestion size={12} color='white' />
				</span>
			</h3>

			{/* tabs */}
			<div className='flex justify-between items-center border-b border-borders-lines w-fit'>
				{slidesTabs.map((slide, index) => (
					<Tab
						key={index}
						title={slide.title}
						active={index === activeIndex}
						onClick={() => setActiveIndex(index)}
					/>
				))}
			</div>

			{/* Render active tab content */}
			<div className={addStyle ? '' : 'pt-5'}>{slidesTabs[activeIndex].content}</div>
		</div>
	);
}
