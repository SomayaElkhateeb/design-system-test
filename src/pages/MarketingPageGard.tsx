import { Navigate, useLocation } from "react-router-dom";

const MarketingPageGard = ({ children }:{children:React.ReactNode}) => {
  const { pathname } = useLocation();
  if (pathname === "/marketing") {
    return <Navigate to="/marketing/apps" />;
  }
  return children;
};
export default MarketingPageGard;
