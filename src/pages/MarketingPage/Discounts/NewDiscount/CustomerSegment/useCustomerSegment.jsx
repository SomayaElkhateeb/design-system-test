import { useState } from "react";

const useCustomerSegment = () => {
  const [optionType, setOptionType] = useState("");
  const [customerSegment, setCustomerSegment] = useState("");
  const [showGroups, setShowGroups] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const handleProductSelect = (product) => {
    const isSelected = selectedCustomers.includes(product);
    setSelectedCustomers((prevProducts) =>
      isSelected
        ? prevProducts.filter((p) => p !== product)
        : [...prevProducts, product]
    );
  };
  const handlecustomersChange = (value) => {
    setCustomerSegment(value);
  };
  const handleOptionChange = (type) => {
    setOptionType(type);
  };
  const hideSelectCustomers = () => {
    setShowCustomers(true);
  };
  const hideSelectGroup = () => {
    setShowGroups(false);
  };
  return {
    optionType,
    setOptionType: handleOptionChange,
    customerSegment,
    setCustomerSegment: handlecustomersChange,
    handleProductSelect,
    showGroups,
    setShowGroups,
    hideSelectGroup,
    showCustomers,
    setShowCustomers,
    hideSelectCustomers,
  };
};

export default useCustomerSegment;
