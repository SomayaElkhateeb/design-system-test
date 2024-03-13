import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  // Sample data for the chart
  const series = [
    {
      name: 'Last Week',
      data: [220, 230, 250, 200, 210, 180, 220],
      
    },
    {
      name: 'This Week',
      data: [200, 210, 230, 240, 250, 230, 240],
      
    }
  ];

  // Options for the chart
  const options = {
    chart: {
      type: 'line',
      height: 1
    },
    stroke: {
      width: 1 // Set the line thickness to 1px
    },
    xaxis: {
      categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
      title: {
        text: 'Dates'
      }
    },
    yaxis: {
      min: 0,
      max: 1000,
      tickAmount: 6, // Adjust the number of ticks on the y-axis as needed
      title: {
        text: 'Values'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    colors: ['#C0C7D6', '#55C397'] // Change the colors of the lines
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ReactApexChart options={options} series={series} type="line" width="100%" />
    </div>
  );
};

export default LineChart;
