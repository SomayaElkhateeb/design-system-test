// @ts-nocheck
import { useState } from 'react';
import StatsCard from 'src/app/components/optimized/Cards/StatsCard';
import data from '../../comp/data.json';
import CompareBar from 'src/app/components/optimized/UiKits/CompareBar';

const AnalyticsComparison = () => {
	const [selectedComparisonOption, setSelectedComparisonOption] = useState("Today");
	const handleComparisonChange = (option) => {
		setSelectedComparisonOption(option);
	};
	return (
		<div>
			<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
			<div className='flex gap-4 flex-wrap'>
				{data.statsData.map((item, index) => (
					<StatsCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};
export default AnalyticsComparison;
