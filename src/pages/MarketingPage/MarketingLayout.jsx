import { Outlet } from "react-router-dom";
import { HorizontalTabsLink } from "src/app/components/optimized";

const MarketingLayout = () => {
  const tabs = ["apps", "discounts", "coupons", "campaigns"];

  return (
    <div>
      <HorizontalTabsLink tabs={tabs} />
      <Outlet />
    </div>
  );
};

export default MarketingLayout;
