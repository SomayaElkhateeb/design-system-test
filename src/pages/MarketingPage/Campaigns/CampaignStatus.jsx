import StatsCard from 'src/app/components/optimized/Cards/StatsCard';
import data from './data.json';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton.tsx';
import { useState } from 'react';
const sortMenus = [
	{ text: 'Option 1', id: 1 },
	{ text: 'Option 2', id: 2 },
	{ text: 'Option 3', id: 3 },
	{ text: 'Option 4', id: 4 },
];
const CampaignStatus = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleSelect = (option) => {
		setSelectedOption(option);
	};
	return (
		<div>
			<div className='mb-4 flex items-center gap-2'>
				<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
				<div className='flex gap-2'>
					<p className='paragraph text-subtitle'>Compared to:</p>
					<p className='paragraph text-title'>Last week</p>
				</div>
			</div>
			<div className='flex gap-4 flex-wrap'>
				{data.statsData.map((item, index) => (
					<StatsCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};
export default CampaignStatus;
