import React from "react";
import { useParams } from "react-router-dom";
import { AppsSetupLayout, NewDiscount } from ".";

const MarketingConfig = () => {
  const { config } = useParams();
  const platform = config.slice(0, config.indexOf("-"));

  const tabs = {
    addDiscount: <NewDiscount />,
    [config]: <AppsSetupLayout platform={platform} />,
  };
  return tabs[config];
};

export default MarketingConfig;
