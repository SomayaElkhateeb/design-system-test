// Done refactoring to type
import ReactApexChart from "react-apexcharts";
import { BackAndroidIcon } from "src/app/utils/icons";

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
    <div className="p-5 bg-white sm:w-[375px] sm:h-[327px] lg:w-[1150px] lg:h-[315px] ">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg font-semibold text-title">Sales</h2>
        <span className="flex text-secondary">
          <BackAndroidIcon className="rotate-90 fill-secondary" /> 4.75%
        </span>
      </div>
      <ReactApexChart
        options={props.options}
        series={props.series}
        type="line"
        width="100%"
        height="89%"
      />
    </div>
  );
}

//     },
//     {
//       name: 'This Week',
//       data: [200, 210, 230, 240, 250, 230, 240],

//     }
//   ];

//   // Options for the chart
//   const options = {
//     chart: {
//       type: 'line',
//       height: 150,
//       fontFamily: 'Poppins, sans-serif',
//     },
//     stroke: {
//       width: 1
//     },
//     xaxis: {
//       categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
//       labels: {
//         rotate: -45,
//       }
//     },
//     yaxis: {
//       min: 0,
//       max: 1000,
//       tickAmount: 5,
//     },
//     legend: {
//       position: 'top',
//       horizontalAlign: 'left',
//     },
//     colors: ['#C0C7D6', '#55C397'],
//     grid: {
//       show: false,
//     },
//   };

//   return (
//     <div className="px-5 pt-5 bg-white sm:w-[375px] sm:h-[353px] lg:w-[729px] lg:h-[315px]">
//       <div className='flex justify-between items-center mb-1'>
//         <h2 className='text-title font-semibold text-lg'>Sales</h2>
//         <span className='flex text-secondary'>
//           <BackAndroidIcon className="rotate-90 fill-secondary" /> 4.75%
//         </span>
//       </div>
//       <ReactApexChart options={options} series={series} type="line" width="100%" />
//     </div>
//   );
// };

// export default LineChart;

// import ReactApexChart from "react-apexcharts";
// import { BackAndroidIcon } from "src/app/utils/icons";

// const LineChart = () => {
//   // Sample data for the chart
//   const series = [
//     {
//       name: "Last Week",
//       data: [220, 230, 250, 200, 210, 180, 220],
//     },
//     {
//       name: "This Week",
//       data: [200, 800, 230, 240, 250, 500, 240],
//     },
//   ];

//   // Options for the chart
//   const options = {
//     chart: {
//       type: "line",
//       fontFamily: "Poppins, sans-serif",
//       toolbar: {
//         show: false,
//       },
//     },
//     stroke: {
//       width: 1,
//     },
//     xaxis: {
//       categories: [
//         "Apr 1",
//         "Apr 2",
//         "Apr 3",
//         "Apr 4",
//         "Apr 5",
//         "Apr 6",
//         "Apr 7",
//       ],
//       labels: {
//         rotate: -45,
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 1000,
//       tickAmount: 5,
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//     },
//     colors: ["#C0C7D6", "#55C397"],
//     grid: {
//       show: false,
//     },
//   };

//   return (
//     <div className="p-5 bg-white sm:w-[375px] sm:h-[327px] lg:w-[1150px] lg:h-[315px] ">
//       <div className="flex justify-between items-center mb-1">
//         <h2 className="text-title font-semibold text-lg">Sales</h2>
//         <span className="flex text-secondary">
//           <BackAndroidIcon className="rotate-90 fill-secondary" /> 4.75%
//         </span>
//       </div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         type="line"
//         width="100%"
//         height="89%"
//       />
//     </div>
//   );
// };

// export default LineChart;

// LineChart.defaultProps =
// 	/** @satisfies {import("./types").ReactApexCompProps} props */ ({
// 		options: {
// 			chart: {
// 				type: 'line',
// 				fontFamily: 'Poppins, sans-serif',
// 				toolbar: {
// 					show: false
// 				}
// 			},
// 			stroke: {
// 				width: 1
// 			},
// 			xaxis: {
// 				categories: [
// 					'Apr 1',
// 					'Apr 2',
// 					'Apr 3',
// 					'Apr 4',
// 					'Apr 5',
// 					'Apr 6',
// 					'Apr 7'
// 				],
// 				labels: {
// 					rotate: -45
// 				}
// 			},
// 			yaxis: {
// 				min: 0,
// 				max: 1000,
// 				tickAmount: 5
// 			},
// 			legend: {
// 				position: 'top',
// 				horizontalAlign: 'left'
// 			},
// 			colors: ['#C0C7D6', '#55C397'],
// 			grid: {
// 				show: false
// 			}
// 		},
// 		series: [
// 			{
// 				name: 'Last Week',
// 				data: [220, 230, 250, 200, 210, 180, 220]
// 			},
// 			{
// 				name: 'This Week',
// 				data: [200, 210, 230, 240, 250, 230, 240]
// 			}
// 		]
// 	});
