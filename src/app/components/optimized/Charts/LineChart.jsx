import ReactApexChart from 'react-apexcharts';
import { BackAndroidIcon } from 'src/app/utils/icons';

/**
 * @param {import("./types").ReactApexCompProps} props
 *
 * @example
 *
 * ```jsx
 *  <ChannelChart
 *   options={{
 *		chart: {
 *			type: "line",
 *			fontFamily: "Poppins, sans-serif",
 *			toolbar: {
 *				show: false,
 *			},
 *		},
 *		stroke: {
 *			width: 1,
 *		},
 *		xaxis: {
 *			categories: [
 *				"Apr 1",
 *				"Apr 2",
 *				"Apr 3",
 *				"Apr 4",
 *				"Apr 5",
 *				"Apr 6",
 *				"Apr 7",
 *			],
 *			labels: {
 *				rotate: -45,
 *			},
 *		},
 *		yaxis: {
 *			min: 0,
 *			max: 1000,
 *			tickAmount: 5,
 *		},
 *		legend: {
 *			position: "top",
 *			horizontalAlign: "left",
 *		},
 *		colors: ["#C0C7D6", "#55C397"],
 *		grid: {
 *			show: false,
 *		},
 *	}}
 *   series={[
 *   	{
 *   		name: "Last Week",
 *   		data: [220, 230, 250, 200, 210, 180, 220],
 *   	},
 *   	{
 *   		name: "This Week",
 *   		data: [200, 210, 230, 240, 250, 230, 240],
 *   	},
 *    ]}
 *  />
 * ```
 */
export default function LineChart(props) {
	return (
		<div className='p-5 bg-white h-80 rounded-xl border border-borders-lines '>
			<div className='flex items-center justify-between mb-1'>
				<h2 className='text-lg font-semibold text-title'>Sales</h2>
				<span className='flex text-secondary'>
					<BackAndroidIcon className='rotate-90 fill-secondary' /> 4.75%
				</span>
			</div>
			<ReactApexChart options={props.options} series={props.series} type='line' width='100%' height='89%' />
		</div>
	);
}

LineChart.defaultProps = {
	options: {
		chart: {
			// type: 'line',
			fontFamily: 'Poppins, sans-serif',
			toolbar: {
				show: false,
			},
		},
		stroke: {
			width: 1,
		},
		xaxis: {
			categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
			labels: {
				rotate: -40,
			},
		},
		yaxis: {
			min: 0,
			max: 1000,
			tickAmount: 5,
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
		},
		colors: ['#C0C7D6', '#55C397'],
		grid: {
			show: false,
		},
	},
	series: [
		{
			name: 'Last Week',
			data: [220, 230, 250, 200, 210, 180, 220],
		},
		{
			name: 'This Week',
			data: [200, 210, 230, 240, 250, 230, 240],
		},
	],
};
