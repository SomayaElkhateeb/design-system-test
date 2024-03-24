import React from "react";
import { useParams } from "react-router-dom";
import { Apps, Campaigns, Coupons, Discounts } from ".";

const TabPage = () => {
  const { tabName } = useParams();
  const tabs = {
    apps: <Apps />,
    discounts: <Discounts />,
    coupons: <Coupons />,
    campaigns: <Campaigns />,
  };
  return tabs[tabName];
};

export default TabPage;
