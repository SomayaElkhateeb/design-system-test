// Imports
import React from 'react';
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

// Route Definitions
export const routes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/store', element: <StorePage /> },
	{ path: '/customers', element: <CustomersPage /> },
	{ path: '/addCustomer', element: <AddCustomerPage /> },
	{ path: '/customers/:id', element: <CustomerInfo /> },
	{ path: '/reviews', element: <ReviewsPage /> },
	{ path: '/services', element: <ServicesPage /> },

	// Apps Routes
	{
		path: '/apps',
		element: <AppsPage />,
		children: [
			{ path: ':tab', element: <AppsTabs /> },
			{ path: 'app_store/:platform', element: <SocialAppDetails /> },
		],
	},

	// Pages Routes
	{
		path: '/pages',
		element: <PagesPage />,
		children: [{ path: ':config', element: <PagesConfig /> }],
	},

	// Orders Routes
	{
		path: '/orders',
		element: <OrdersPage />,
		children: [{ path: ':tab', element: <OrdersTabs /> }],
	},

	// Products Routes
	{
		path: '/products',
		element: <ProductsPage />,
		children: [{ path: ':tab', element: <ProductsTabs /> }],
	},

	// Settings Routes
	{
		path: '/settings',
		element: <SettingsPage />,
		children: [
			{
				path: ':config',
				element: <SettingsConfig />,
				children: [{ path: ':nested_page', element: <Nested_pages_SettingsConfig /> }],
			},
		],
	},

	// Marketing Routes
	{
		path: '/marketing',
		element: <MarketingPage />,
		children: [
			{ path: ':tab', element: <MarketingTabs /> },
			{ path: ':tabName/:config', element: <MarketingConfig /> },
		],
	},

	// Analytics Routes
	{
		path: '/analytics',
		element: <AnalyticsPage />,
		children: [{ path: ':tab', element: <AnalyticsTabs /> }],
	},
];
