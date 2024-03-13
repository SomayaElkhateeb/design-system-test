import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedColumnChart = () => {
  // Sample data for the chart
  const series = [
    {
      name: 'Group 1',
      data: [300, 1000, 700, 300, 500, 300]
    },
    {
      name: 'Group 2',
      data: [100, 100, 200, 400, 500, 900]
    }
  ];

  // Options for the chart
  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      height: 350,
      fontFamily: 'Poppins, sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    yaxis: {
      categories: ['0', '100', '200', '300', '500', '1000'],
      title: {
        text: 'Sales',
        offsetX: 0,
        offsetY: 0,
        style: {
          fontSize: '12px',
          fontWeight: 600,
          color: '#333'
        },
        opposite: true,
      }

    },
    xaxis: {
      categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6'],

    },

    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#55C397', '#FFCC73']
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ReactApexChart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default StackedColumnChart;
