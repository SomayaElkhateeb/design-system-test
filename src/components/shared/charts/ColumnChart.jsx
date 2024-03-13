import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = () => {
  // Sample data for the chart
  const series = [
    {
      name: 'Series 1',
      data: [100, 500, 300, 800, 200, 900, 400, 950, 50]
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
        columnWidth: '60%'
      }
    },
    xaxis: {
      categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9'],
     
    },
    yaxis: {
      categories: [0, 100, 200, 300, 500, 1000], // Dates for y-axis
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
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#55C397'] // Change the color of the bars
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ReactApexChart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default ColumnChart;
