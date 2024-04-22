import { useState, useRef } from 'react';

const useAnalyticsData = (initialData, sortFunctions) => {
  const [selectedComparisonOption, setSelectedComparisonOption] = useState("Today");
  const [arrange, setArrange] = useState();
  const [tableData, setTableData] = useState(initialData);
  const AnalyticsTableRef = useRef();

  const handleComparisonChange = (option) => {
    setSelectedComparisonOption(option);
  };

  const handleArrangeChange = (option) => {
    setArrange(option);
    if (option) {
      const sortedData = tableData.slice().sort(sortFunctions[option]);
      setTableData(sortedData);
    }
  };

  return {
    selectedComparisonOption,
    setSelectedComparisonOption,
    arrange,
    setArrange,
    tableData,
    setTableData,
    handleComparisonChange,
    handleArrangeChange,
    AnalyticsTableRef
  };
};

export default useAnalyticsData;
