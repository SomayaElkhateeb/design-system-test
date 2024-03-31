import { useState } from "react";

const useDiscountForm = () => {
  const [discountName, setDiscountName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [fixedAmount, setFixedAmount] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [showSelectCategories, setShowSelectCategories] = useState(false);
  const [applyTo, setApplyTo] = useState("");
  const [customerGets, setCustomerGets] = useState("");
  const [percentGets, setPercentGets] = useState("");
  const [quantityGets, setQuantityGets] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (product) => {
    const isSelected = selectedProducts.includes(product);
    setSelectedProducts((prevProducts) =>
      isSelected
        ? prevProducts.filter((p) => p !== product)
        : [...prevProducts, product]
    );
  };

  const handleDiscountTypeChange = (type) => {
    setDiscountType(type);
  };

  const handleApplyToChange = (value) => {
    setApplyTo(value);
  };

  const handleCloseSelectCategories = () => {
    setShowSelectCategories(false);
  };

  const handlePercentGetsChange = (value) => {
    setPercentGets(value);
  };

  const handleQuantityGetsChange = (value) => {
    setQuantityGets(value);
  };
  const handleCustomerGetsChange = (value) => {
    setCustomerGets(value);
  };

  return {
    discountName,
    setDiscountName,
    discountType,
    setDiscountType: handleDiscountTypeChange,
    applyTo,
    setApplyTo: handleApplyToChange,
    customerGets,
    setCustomerGets: handleCustomerGetsChange,
    selectedProducts,
    handleProductSelect,
    percentage,
    setPercentage,
    fixedAmount,
    setFixedAmount,
    percentGets,
    setPercentGets: handlePercentGetsChange,
    quantityGets,
    setQuantityGets: handleQuantityGetsChange,
    showSelectCategories,
    setShowSelectCategories,
    handleCloseSelectCategories,
  };
};

export default useDiscountForm;
