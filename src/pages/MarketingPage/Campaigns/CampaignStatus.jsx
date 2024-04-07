import StatsCard from 'src/app/components/optimized/Cards/StatsCard';
import { Button, Menu } from 'src/app/components/optimized';
import { useState } from 'react';
import data from './data.json';
import { CalenderIcon, DownIcon } from 'src/app/utils/icons';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';

const CampaignStatus = () => {
	return (
		<>
			<ComparisonSelector />
			<div className='flex gap-4 flex-wrap'>
				{data.statsData.map((item, index) => (
					<StatsCard key={index} {...item} />
				))}
			</div>
		</>
	);
};
export default CampaignStatus;

const ComparisonSelector = () => {
	const { isOpen, selectedOption, handleSelect, handleButtonClick } = useSelectBox();
	const options = [
		{ text: 'Option 1', id: 1 },
		{ text: 'Option 2', id: 2 },
		{ text: 'Option 3', id: 3 },
		{ text: 'Option 4', id: 4 },
	];

	return (
		<div className=' relative flex items-center mb-4'>
			<Button
				variant='secondary'
				LeftIcon={CalenderIcon}
				RightIcon={DownIcon}
				text={selectedOption || 'Select'}
				onClick={handleButtonClick}
			/>
			<div className='flex gap-2 ml-3'>
				<p className='paragraph text-subtitle'>Compared to:</p>
				<p className='paragraph text-title'>Last week</p>
			</div>
			{isOpen && <Menu options={options} selectedOption={selectedOption} onSelect={handleSelect} />}
		</div>
	);
};
