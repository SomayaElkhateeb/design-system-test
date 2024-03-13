import ChanneChart from "src/components/shared/charts/ChanneChart";
import StackedColumnChart from "src/components/shared/charts/ChartTwoColumn";
import ChartTwoColumn from "src/components/shared/charts/ChartTwoColumn";
import ColumnChart from "src/components/shared/charts/ColumnChart";
import LineChart from "src/components/shared/charts/LineChart";
import DonutChart from "src/components/shared/charts/chart";



const HomePage = () => {
  return (
    <div>
      {/* <ColumnChart />
      <div className="w-96">

      <ChanneChart />
      </div>
      <ChartTwoColumn /> */}
      <DonutChart />
      <StackedColumnChart />
      <ColumnChart />
      <LineChart />
   
    </div>
  )
}

export default HomePage;