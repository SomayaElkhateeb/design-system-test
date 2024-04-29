import { useState } from 'react';

const useAnalyticsData = (initialData, sortFunctions) => {
  const [selectedComparisonOption, setSelectedComparisonOption] = useState();
  const [arrange, setArrange] = useState();
  const [tableData, setTableData] = useState(initialData);

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
    arrange,
    tableData,
    setTableData,
    handleComparisonChange,
    handleArrangeChange,
  };
};

export default useAnalyticsData;
