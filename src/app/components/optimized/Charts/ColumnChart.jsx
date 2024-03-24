import ReactApexChart from "react-apexcharts";
import { BackAndroidIcon } from "src/app/utils/icons";

const ColumnChart = () => {
  const series = [
    {
      name: "Series 1",
      data: [100, 500, 300, 800, 200, 100, 400, 250, 50],
    },
  ];

  // Options for the chart
  const options = {
    chart: {
      type: "bar",
      stacked: true,
      fontFamily: "Poppins, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
      },
    },
    xaxis: {
      categories: [
        "Apr 1",
        "Apr 2",
        "Apr 3",
        "Apr 4",
        "Apr 5",
        "Apr 6",
        "Apr 7",
        "Apr 8",
        "Apr 9",
      ],
      labels: {
        rotate: -45,
      },
    },
    yaxis: {
      // categories: [0, 100, 200, 300, 500, 1000], // Dates for y-axis
      tickAmount: 5,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#55C397"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    grid: {
      show: false,
    },
  };

  return (
    <div className="px-5 pt-5 bg-white sm:w-[375px] sm:h-[327px] lg:w-[1150px] lg:h-[315px]">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-title font-semibold text-lg">Sales</h2>
        <span className="flex text-secondary">
          <BackAndroidIcon className="rotate-90 fill-secondary" />
          4.75%
        </span>
      </div>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="89%"
      />
    </div>
  );
};

export default ColumnChart;
