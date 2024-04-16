import ReactApexChart from 'react-apexcharts';
import { BackAndroidIcon } from 'src/app/utils/icons';

/**
 * @param {import("./types").ReactApexCompProps} props
 *
 * @example
 *
 * ```jsx
 *  <ChannelChart
 *   series={[
 * 		{
 *   		name: 'Series 1',
 *   		data: [100, 500, 300, 800, 200, 100, 400, 250, 50]
 *    }
 *   ]}
 *   options={{
 *   	chart: {
 *   		type: 'bar',
 *   		stacked: true,
 *   		fontFamily: 'Poppins, sans-serif',
 *   		toolbar: {
 *   			show: false
 *   		}
 *   	},
 *   	plotOptions: {
 *   		bar: {
 *   			horizontal: false,
 *   			columnWidth: '70%'
 *   		}
 *   	},
 *   	xaxis: {
 *   		categories: [
 *   			'Apr 1',
 *   			'Apr 2',
 *   			'Apr 3',
 *   			'Apr 4',
 *   			'Apr 5',
 *   			'Apr 6',
 *   			'Apr 7',
 *   			'Apr 8',
 *   			'Apr 9'
 *   		],
 *   		labels: {
 *   			rotate: -45
 *   		}
 *   	},
 *   	yaxis: {
 *   		// categories: [0, 100, 200, 300, 500, 1000], // Dates for y-axis
 *   		tickAmount: 5
 *   	},
 *   	legend: {
 *   		position: 'top',
 *   		horizontalAlign: 'left'
 *   	},
 *   	colors: ['#55C397'],
 *   	responsive: [
 *   		{
 *   			breakpoint: 480,
 *   			options: {
 *   				chart: {
 *   					width: 200
 *   				},
 *   				legend: {
 *   					position: 'bottom'
 *   				}
 *   			}
 *   		}
 *   	],
 *   	grid: {
 *   		show: false
 *   	}
 *   }}
 *  />
 * ```
 */
export default function ColumnChart(props) {
	return (
		<div className='px-5 pt-5 bg-white sm:h-[327px] lg:h-[315px]'>
			<div className='flex items-center justify-between mb-1'>
				<h2 className='text-lg font-semibold text-title'>Sales</h2>
				<span className='flex text-secondary'>
					<BackAndroidIcon className='rotate-90 fill-secondary' />
					4.75%
				</span>
			</div>

			<ReactApexChart options={props.options} series={props.series} type='bar' width='100%' height='89%' />
		</div>
	);
}

ColumnChart.defaultProps = /** @satisfies {import("./types").ReactApexCompProps} */ ({
	series: [
		{
			name: 'Series 1',
			data: [100, 500, 300, 800, 200, 100, 400, 250, 50],
		},
	],
	options: {
		chart: {
			type: 'bar',
			stacked: true,
			fontFamily: 'Poppins, sans-serif',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
			},
		},
		xaxis: {
			categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9'],
			labels: {
				rotate: -45,
			},
		},
		yaxis: {
			// categories: [0, 100, 200, 300, 500, 1000], // Dates for y-axis
			tickAmount: 5,
		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
		},
		colors: ['#55C397'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
		grid: {
			show: false,
		},
	},
});
