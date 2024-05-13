import {
	AddCustomerPage,
	AnalyticsPage,
	AppsPage,
	CustomersPage,
	HomePage,
	MarketingPage,
	OrdersPage,
	PagesPage,
	ProductsPage,
	ReviewsPage,
	ServicesPage,
	SettingsPage,
	SocialAppDetails,
	StorePage,
} from 'src/pages';

import OrdersTabs from './app/components/page/Orders/OrdersTabs';
import ProductsTabs from './app/components/page/Products/ProductsTabs';
import Nested_pages_SettingsConfig from './app/components/page/SettingPage/Nested_Settings_pagesConfig';
import { AnalyticsTabs } from './pages/AnalyticsPage/comp';
import AppsTabs from './pages/AppsPage/comp/AppsTabs';
import CustomerInfo from './pages/CustomerInfoPage/CustomerInfo';
import { MarketingConfig, MarketingTabs } from './pages/MarketingPage/comp';
import PagesConfig from './pages/PagesPage/comp/PagesConfig';
import SettingsConfig from './pages/SettingsPage/SettingsConfig';

// Creating browser router routes
export const routes = [
	{ path: '/', element: <HomePage /> },
	{
		path: '/apps',
		element: <AppsPage />,
		children: [
			{ path: ':tab', element: <AppsTabs /> },
			{
				path: 'app_store/:platform',
				element: <SocialAppDetails />,
			},
		],
	},
	{
		path: '/pages',
		element: <PagesPage />,
		children: [
			{
				path: ':config',
				element: <PagesConfig />,
			},
		],
	},
	{ path: '/store', element: <StorePage /> },
	{
		path: '/orders',
		element: <OrdersPage />,
		children: [{ path: ':tab', element: <OrdersTabs /> }],
	},
	{ path: '/reviews', element: <ReviewsPage /> },
	{ path: '/services', element: <ServicesPage /> },
	{
		path: '/settings',
		element: <SettingsPage />,
		children: [
			{
				path: ':config',
				element: <SettingsConfig />,
				children: [
					{
						path: ':nested_page',
						element: <Nested_pages_SettingsConfig />,
					},
				],
			},
		],
	},
	{
		path: '/products',
		element: <ProductsPage />,
		children: [{ path: ':tab', element: <ProductsTabs /> }],
	},
	{
		path: '/customers',
		element: <CustomersPage />,
		children: [{ path: ':id', element: <CustomerInfo /> }],
	},
	{ path: '/addCustomer', element: <AddCustomerPage /> },
	{
		path: '/marketing',
		element: <MarketingPage />,
		children: [
			{ path: ':tab', element: <MarketingTabs /> },
			{ path: ':tabName/:config', element: <MarketingConfig /> },
		],
	},
	{
		path: '/analytics',
		element: <AnalyticsPage />,
		children: [{ path: ':tab', element: <AnalyticsTabs /> }],
	},
];
