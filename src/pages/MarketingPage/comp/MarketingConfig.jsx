import React from "react";
import { useParams } from "react-router-dom";
import { AppsSetupLayout, NewDiscount } from ".";

const MarketingConfig = () => {
  const { config } = useParams();
  const tabs = {
    addDiscount: <NewDiscount />,
    config: <AppsSetupLayout />,
  };
  return tabs[config];
};

export default MarketingConfig;
