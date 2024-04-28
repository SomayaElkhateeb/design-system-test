import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface AnalyticsGardProps {
  children: ReactNode
}

export default function AnalyticsPageGard({ children }:AnalyticsGardProps)  {
  const { pathname } = useLocation();
  if (pathname === "/analytics") {
    return <Navigate to="/analytics/overview" />;
  }
  return children;
};
