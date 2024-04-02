


const StatsCard = ({ percentage, label, value, positive, extensions }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg border border-black  p-2 w-40 h-[100px] ">
      <div className="flex items-center">
        <BackAndroidIcon
          className={`${
            positive ? "fill-success rotate-90" : "fill-error -rotate-90"
          }`}
        />
        <h2 className={`paragraph ${positive ? "text-success" : "text-error"}`}>
          {percentage}
        </h2>
      </div>
      <p className="subheading text-title my-[3px]">{label}</p>
      <div className="flex items-end gap-2">
        <p className="text-3xl  text-title">{value}</p>
        {<span className="paragraph text-subtitle">{extensions}</span>}
      </div>
    </div>
  );
};


export default StatsCard;
// const ParentComponent = () => {
//   const statsData = [
//     {
//       percentage: "75%",
//       label: "Completion Rate",
//       value: "750",
//       positive: true,
//       extensions: "abc",
//     },
//   ];
//   return (
//     <div className="flex justify-center space-x-4">
//       {/* Mapping over statsData and rendering StatsCard for each item */}
//       {statsData.map((stat, index) => (
//         <StatsCard
//           key={index}
//           percentage={stat.percentage}
//           label={stat.label}
//           value={stat.value}
//           positive={stat.positive}
//           extensions={stat.extensions}
//         />
//       ))}
//     </div>
//   );
// };