import { Navigate, useLocation } from "react-router-dom";

const MarketingPageGard = ({ children }) => {
  const { pathname } = useLocation();
  if (pathname === "/marketing") {
    return <Navigate to="/marketing/apps" />;
  }
  return children;
};
export default MarketingPageGard;
