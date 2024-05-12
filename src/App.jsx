import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import i18n from './app/language/i18n';

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
	AddCustomerPage,
} from 'src/pages';
import { MarketingConfig, MarketingTabs } from './pages/MarketingPage/comp';
import ProductsTabs from './app/components/page/Products/ProductsTabs';
import { UseLanguage } from './app/components/CustomHook/LanguageHook';
import SettingsConfig from './pages/SettingsPage/comp/SettingsConfig';
import OrdersTabs from './app/components/page/Orders/OrdersTabs';
import CustomerInfo from './pages/CustomerInfoPage/CustomerInfo';
import AddSettings from './pages/SettingsPage/comp/AddSettings';
import { AnalyticsTabs } from './pages/AnalyticsPage/comp';
import AppsTabs from './pages/AppsPage/comp/AppsTabs';

import RootLayout from './pages/RootLayout';
import ShippingConfig from './app/components/page/SettingPage/Shipping/ShippingConfig';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/apps', element: <AppsPage />, children: [{ path: ':tab', element: <AppsTabs /> }] },
			{ path: '/pages', element: <PagesPage /> },
			{ path: '/store', element: <StorePage /> },
			{ path: '/orders', element: <OrdersPage /> },
			{ path: '/reviews', element: <ReviewsPage /> },
			{ path: '/services', element: <ServicesPage /> },
			{
				path: 'settings',
				element: <SettingsPage />,
			},
			{
				path: '/settings/:config',
				element: <SettingsConfig />,
			},
			{
				path: '/settings/:config/:add',
				element: <AddSettings />,
			},
			{
				path: '/settings/shipping/:config',
				element: <ShippingConfig />,
			},
			{
				path: '/products',
				element: <ProductsPage />,
				children: [{ path: ':tab', element: <ProductsTabs /> }],
			},
			{
				path: '/orders',
				element: <OrdersPage />,
				children: [{ path: ':tab', element: <OrdersTabs /> }],
			},
			{ path: '/customers', element: <CustomersPage /> },
			{ path: '/customers/:id', element: <CustomerInfo /> },
			{ path: '/addCustomer', element: <AddCustomerPage /> },
			{
				path: '/marketing',
				element: <MarketingPage />,
				children: [{ path: ':tab', element: <MarketingTabs /> }],
			},
			{
				path: '/analytics',
				element: <AnalyticsPage />,
				children: [{ path: ':tab', element: <AnalyticsTabs /> }],
			},
			{ path: '/apps/app_store/:platform', element: <SocialAppDetails /> },
			{ path: '/marketing/:tabName/:config', element: <MarketingConfig /> },
		],
	},
]);
// AnalyticsTabs
const App = () => {
	const language = UseLanguage();
	useEffect(() => {
		language === 'ar' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');

		document.dir = language === 'ar' ? 'rtl' : 'ltr';
		// Change font family based on language
		const root = document.getElementById('root');
		if (language === 'ar') {
			root?.style.setProperty('--font-family', 'var(--font-family-ar)');
		} else {
			root?.style.setProperty('--font-family', 'var(--font-family-en)');
		}
	}, [language, i18n]);
	return <RouterProvider router={router} />;
};

export default App;
