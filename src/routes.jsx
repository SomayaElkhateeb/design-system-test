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
import Nested_pages_SettingsConfig from './pages/SettingsPage/Nested_Settings_pagesConfig';
import { AnalyticsTabs } from './pages/AnalyticsPage/comp';
import AppsTabs from './pages/AppsPage/comp/AppsTabs';
import CustomerInfo from './pages/CustomerInfoPage/CustomerInfo';
import { MarketingConfig, MarketingTabs } from './pages/MarketingPage/comp';
import PagesConfig from './pages/PagesPage/comp/PagesConfig';
import SettingsConfig from './pages/SettingsPage/SettingsConfig';
import Config from './app/components/page/SettingPage/Shipping/Comp/Config';
import ShippingConfig from './app/components/page/SettingPage/Shipping/ShippingConfig';
import StoreTabs from './app/components/page/StorePage/StoreTabs';
import StoreConfig from './app/components/page/StorePage/StoreConfig';

// Route Definitions
export const routes = [
	{ path: '/', element: <HomePage /> },
	
	
	{ path: '/reviews', element: <ReviewsPage /> },
	{ path: '/services', element: <ServicesPage /> },

	// Customers Routes
	{
		path: '/customers',
		element: <CustomersPage />,
	},
	{
		path: '/customers/:id',
		element: <CustomerInfo />,
	},
	{ path: '/customers/addCustomer', element: <AddCustomerPage /> },
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
	},
	{
		path: '/pages/:config',
		element: <PagesConfig />,
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
	},
	{
		path: '/settings/:config',
		element: <SettingsConfig />,
	},
	{
		path: '/settings/:config/:nested_page',
		element: <Nested_pages_SettingsConfig />,
	},
	{
		path: '/settings/shipping/:config',
		element: <ShippingConfig />,
	},
	{
		path: '/settings/shipping/:config/:config',
		element: <Config />,
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

	// store Routes
	{
		path: '/store',
		element: <StorePage />,
		children: [
			{ path: ':tab', element: <StoreTabs /> },
			{ path: ':tabName/:id', element: <StoreConfig /> },
		],
	},

	// Analytics Routes
	{
		path: '/analytics',
		element: <AnalyticsPage />,
		children: [{ path: ':tab', element: <AnalyticsTabs /> }],
	},
];
