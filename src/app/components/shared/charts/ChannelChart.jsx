import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { BackAndroidIcon } from 'src/app/utils/icons';

const ChannelChart = () => {

    const [chartData] = useState({
        series: [44, 55, 41],
        options: {
            chart: {
                type: 'donut',
                width: '100%',
                fontFamily: 'Poppins , sans-serif',

            },
            plotOptions: {
                
                    pie: {
                        dataLabels: {
                            position: 'top', 
                        },
                    },
                },
                grid: {
                    padding: {
                        right: 25,
                        left: 20,
                    },
                },
                labels: [
                    'Google',
                    'Social media',
                    'Email',
                ],
                legend: {
                    position: 'top',
                    horizontalAlign: 'center',
                  },
                colors: ['#446CCE', '#49C596', '#D65036'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,
                        },
                    }
                }]
            }
        });
    return (
        <div className='w-[375px] h-[300px] border border-constrained rounded-md bg-white p-5'>
            <div className='flex justify-between items-center mb-1'>
                <h2 className='text-title font-semibold text-lg'>sales by channel</h2>
                <span className='flex text-secondary'>
                    <BackAndroidIcon className="rotate-90 fill-secondary"/> 4.75%
                </span>
            </div>

            <div id="chart">
                <ReactApexChart options={chartData.options} 
                series={chartData.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </div>
    );

}

export default ChannelChart;


// labels: [
//     'Social media',
//     'Email',
//     'Google',

// ],
// colors: ['#49C596', '#D65036', '#446CCE'],




