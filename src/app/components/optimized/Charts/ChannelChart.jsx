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
 *   	chart: {
 *   		type: 'donut',
 *   		width: '100%',
 *   		fontFamily: 'Poppins , sans-serif'
 *   	},
 *   	plotOptions: {
 *   		pie: {
 *   			dataLabels: {
 *   				// position doesn't exist in the types of `pie`
 *   				// position: 'top'
 *   			}
 *   		}
 *   	},
 *   	grid: {
 *   		padding: {
 *   			right: 25,
 *   			left: 20
 *   		}
 *   	},
 *   	labels: ['Google', 'Social media', 'Email'],
 *   	legend: {
 *   		position: 'top',
 *   		horizontalAlign: 'center'
 *   	},
 *   	colors: ['#446CCE', '#49C596', '#D65036'],
 *   	responsive: [
 *   		{
 *   			breakpoint: 480,
 *   			options: {
 *   				chart: {
 *   					width: 400
 *   				}
 *   			}
 *   		}
 *   	]
 *   }}
 *   series={[44, 55, 41]}
 *  />
 * ```
 */
export default function ChannelChart(props) {
	// max-w-[25rem]
	return (
		<div className=' h-full min-w-[20rem] rounded-xl border border-borders-lines bg-white p-4'>
			<div className='flex items-center justify-between mb-1'>
				<h2 className='text-lg font-semibold text-title'>sales by channel</h2>
				<span className='flex text-secondary'>
					<BackAndroidIcon className='rotate-90 fill-secondary' /> 4.75%
				</span>
			</div>

			<div id='chart'>
				<ReactApexChart options={props.options} series={props.series} type='donut' width='100%' height='89%' />
			</div>
			<div id='html-dist'></div>
		</div>
	);
}

ChannelChart.defaultProps = /** @satisfies {import("./types").ReactApexCompProps} */ ({
	options: {
		chart: {
			type: 'donut',
			width: '100%',
			fontFamily: 'Poppins , sans-serif',
		},
		plotOptions: {
			pie: {
				dataLabels: {
					// position doesn't exist in the types of `pie`
					// position: 'top'
				},
			},
		},
		grid: {
			padding: {
				right: 25,
				left: 20,
			},
		},
		labels: ['Google', 'Social media', 'Email'],
		legend: {
			position: 'top',
			horizontalAlign: 'center',
		},
		colors: ['#446CCE', '#49C596', '#D65036'],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 400,
					},
				},
			},
		],
	},
	series: [44, 55, 41],
});
