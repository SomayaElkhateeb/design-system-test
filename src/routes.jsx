// Imports
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
import ShippingConfig from './app/components/page/SettingPage/Shipping/ShippingConfig';
import SetupOpenConfig from './app/components/page/SettingPage/Shipping/OpenSetup/SetupOpenConfig';
import SetupConfig from './app/components/page/SettingPage/Shipping/OpenSetup/Setup/SetupConfig';
import Config from './app/components/page/SettingPage/Shipping/OpenSetup/Smsa/Config';
import StoreTabs from './app/components/page/StorePage/StoreTabs';
import StoreConfig from './app/components/page/StorePage/StoreConfig';

import BillingAndPlans from './pages/SettingsPage/BillingAndPlans';

import PurchaseConfig from './app/components/page/Services/PurchaseServices/PurchaseConfig';

import AddCustomerGroup from './pages/AddCustomerGroupPage/AddCustomerGroup';

import SuccessfullyPurchased from './app/components/page/Services/PurchaseServices/SuccessfullyPurchased/SuccessfullyPurchased';

import AddNewAddresseCustomer from './pages/AddresseCustomerPge/AddNewAddresse';



// Route Definitions
export const routes = [
	{ path: '/', element: <HomePage /> },
	{ path: '/reviews', element: <ReviewsPage /> },
	// Customers Routes
	{ path: '/services', element: <ServicesPage /> },
	{ path: '/services/:config', element: <PurchaseConfig /> },
	{ path: '/services/:config/:config', element: <SuccessfullyPurchased /> },

	// Customers Routes
	{
		path: '/customers',
		element: <CustomersPage />,
	},
	{
		path: '/customers/:id',
		element: <CustomerInfo />,
	},
	{
		path: '/customers/:id/addNewAddresse',
		element: <AddNewAddresseCustomer />,
	},
	{ path: '/customers/addCustomer', element: <AddCustomerPage /> },
	{ path: '/customers/addGroupCustomer', element: <AddCustomerGroup /> },
	// Apps Routes
	{
		path: '/apps',
		element: <AppsPage />,
		children: [
			{ path: ':tab', element: <AppsTabs /> },
			{ path: 'app_store/:platform', element: <SocialAppDetails /> },
		],
	},
	{
		path: 'settings',
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
		path: '/settings/billing',
		element: <BillingAndPlans />,
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
	{
		path: '/settings/shipping/:config/:config/:setup',
		element: <SetupOpenConfig />,
	},
	{
		path: '/settings/shipping/:config/:config/:setup/:config',
		element: <SetupConfig />,
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
