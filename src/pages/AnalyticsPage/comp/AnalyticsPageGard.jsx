import { Navigate, useLocation } from "react-router-dom";

const AnalyticsPageGard = ({ children }) => {
  const { pathname } = useLocation();
  if (pathname === "/analytics") {
    return <Navigate to="/analytics/overview" />;
  }
  return children;
};
export default AnalyticsPageGard;
