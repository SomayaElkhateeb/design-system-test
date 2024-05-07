import MarketingPageGuard from "../MarketingPageGuard";
import MarketingLayout from "./comp/MarketingLayout";

const MarketingPage = () => {
  return (
    <MarketingPageGuard>
      <MarketingLayout />
    </MarketingPageGuard>
  );
};

export default MarketingPage;
