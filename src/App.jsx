import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AppsPage,
  HomePage,
  StorePage,
  ErrorPage,
  PagesPage,
  OrdersPage,
  ReviewsPage,
  SettingsPage,
  ProductsPage,
  ServicesPage,
  AnalyticsPage,
  CustomersPage,
  MarketingPage,
  SocialAppDetails,
} from "src/pages";
import RootLayout from "./pages/RootLayout";
import { AddPage, TabPage } from "./pages/MarketingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "apps", element: <AppsPage /> },
      { path: "pages", element: <PagesPage /> },
      { path: "store", element: <StorePage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "customers", element: <CustomersPage /> },
      {
        path: "marketing",
        element: <MarketingPage />,
        children: [{ path: ":tabName", element: <TabPage /> }],
      },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "apps/:platform", element: <SocialAppDetails /> },
      { path: "marketing/:tabName/:add", element: <AddPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
