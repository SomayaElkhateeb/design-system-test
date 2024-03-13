import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  // Sample data for the chart
  const series = [44, 55, 41];

  // Options for the chart
  const options = {
    chart: {
      type: 'donut',
      fontFamily: 'Poppins , sans-serif',
    },
    labels: ['Google', 'Social media', 'Email'],
    colors: ['#446CCE', '#49C596', '#D65036'],
   
    legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ReactApexChart options={options} series={series} type="donut" width="100%" />
    </div>
  );
};

export default DonutChart;
