import React from 'react';
import { ChartData } from './DonutGraph';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

interface ChartLegend {
	label: string;
	value: number;
	color: string;
}
interface DonutCardProps {
	title: string;
	score: number;
	graph: React.ReactNode;
	legends: ChartLegend[];
}

const DonutCard: React.FC<DonutCardProps> = ({ title, score, graph, legends }) => {
	return (
		<div className='flex flex-col bg-white rounded-lg shadow-md p-4  w-[30rem]'>
			<div className='flex justify-between items-center pb-4'>
				<h2 className='text-xl font-bold text-gray-800'>{title}</h2>
				<span className={`text-lg  ${score > 0 ? 'text-green-500' : 'text-red-500'}`}>
					{score > 0 ? (
						<div className='flex space-x-1 items-center'>
							<GoArrowUp /> {`${score}%`}
						</div>
					) : (
						<div className='flex space-x-1 items-center'>
							<GoArrowDown /> {`${score}%`}
						</div>
					)}
				</span>
			</div>
			<div className='flex flex-col pt-4 space-x-2'>
				<ChartLegend legends={legends} />
				<div className='flex items-center justify-center '>
					<div className='relative'>{graph}</div>
				</div>
			</div>
		</div>
	);
};

interface ChartLegendProps {
	legends: ChartData[];
}

const ChartLegend: React.FC<ChartLegendProps> = ({ legends }) => {
	return (
		<div className='flex space-x-1 justify-start'>
			{legends.map((legend, index) => (
				<div key={index} className='flex items-center space-x-2 border p-1 rounded-md'>
					<div className={`size-4 rounded-full`} style={{ backgroundColor: legend.color }}></div>
					<p className='text-sm text-gray-500'>{legend.label}</p>
				</div>
			))}
		</div>
	);
};

export default DonutCard;
/*
const chartData: ChartData[] = [
	{
		label: 'Detractors',
		value: 31,
		color: '#e74c3c',
	},
	{
		label: 'Passives',
		value: 31,
		color: '#F97316',
	},
	{
		label: 'Promoters',
		value: 41,
		color: '#2ecc71',
	},
];
<DonutCard
	title='Net Promoter Score'
	score={4.75}
	graph={<DonutGraph chartData={chartData} />}
	legends={chartData}
/>;
*/