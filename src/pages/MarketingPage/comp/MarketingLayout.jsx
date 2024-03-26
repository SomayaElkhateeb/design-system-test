import { Outlet } from "react-router-dom";
import { HorizontalTabsLink } from "src/app/components/optimized";

const MarketingLayout = () => {
  const tabs = ["apps", "discounts", "coupons", "campaigns"];

  return (
    <div>
      <div className="sticky top-[70px] z-50">
        <HorizontalTabsLink tabs={tabs} path="/marketing" />
      </div>
      <Outlet />
    </div>
  );
};

export default MarketingLayout;
