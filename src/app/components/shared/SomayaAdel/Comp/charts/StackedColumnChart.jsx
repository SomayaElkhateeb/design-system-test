
import ReactApexChart from 'react-apexcharts';
import { BackAndroidIcon } from 'src/app/utils/icons';

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
      height: 150,
      fontFamily: 'Poppins, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%'
      }
    },
    yaxis: {
      tickAmount: 5,
    },
    xaxis: {
      categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6'],
      labels: {
        rotate: -45, 
      }
    },

    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    colors: ['#55C397', '#FFCC73'],
    grid: {
      show: false, 
    },
  };

  return (
    <div className="mx-auto px-5 pt-5 bg-white w-[375px] h-[300px]">
      <div className='flex justify-between items-center mb-1'>
        <h2 className='text-title font-semibold text-lg'>Sales</h2>
        <span className='flex text-secondary'>
          <BackAndroidIcon className="rotate-90 fill-secondary" /> 4.75%
        </span>
      </div>
      <ReactApexChart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default StackedColumnChart;
