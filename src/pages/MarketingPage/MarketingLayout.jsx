import React, { useEffect, useState } from "react";

import { Apps, Campaigns, Coupons, Discounts } from "./";
import { HorizontalTabs } from "src/app/components";

const MarketingLayout = () => {
  const tabs = {
    apps: <Apps />,
    discounts: <Discounts />,
    coupons: <Coupons />,
    campaigns: <Campaigns />,
  };

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "apps";
  });

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div>
      <HorizontalTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={handleClick}
      />
    </div>
  );
};

export default MarketingLayout;
