import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChanneChart = () => {

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
                            position: 'top', // Change the position of series labels here (e.g., 'inside', 'outside', 'distributed')
                        },
                    },
                },
                "grid": {
                    "padding": {
                        "right": 25,
                        "left": 20
                    }
                },
                labels: [
                    'Social media',
                    'Email',
                    'Google',

                ],
                colors: ['#49C596', '#D65036', '#446CCE'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bootom'
                        }
                    }
                }]
            }
        });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartData.options} 
                series={chartData.series} type="donut" />
            </div>
            <div id="html-dist"></div>
        </div>
    );

}

export default ChanneChart;


// labels: [
//     'Social media',
//     'Email',
//     'Google',

// ],
// colors: ['#49C596', '#D65036', '#446CCE'],




