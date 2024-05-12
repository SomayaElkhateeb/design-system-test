import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import RootLayout from './pages/RootLayout';
import { MarketingConfig, MarketingTabs } from './pages/MarketingPage/comp';
import { UseLanguage } from './app/components/CustomHook/LanguageHook';
import { useEffect } from 'react';
import i18n from './app/language/i18n';
import CustomerInfo from './pages/CustomerInfoPage/CustomerInfo';
import ProductsTabs from './app/components/page/Products/ProductsTabs';
import { AnalyticsTabs } from './pages/AnalyticsPage/comp';
import OrdersTabs from './app/components/page/Orders/OrdersTabs';

import SettingsConfig from './pages/SettingsPage/comp/SettingsConfig';

import AppsTabs from './pages/AppsPage/comp/AppsTabs';
import PagesConfig from './pages/PagesPage/comp/PagesConfig';
import UsersConfig from './app/components/page/SettingPage/PermissionsAndUsers/UsersConfig';

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
				path: '/settings',
				element: <SettingsPage />,
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
			{
				path: '/settings/:config',
				element: <SettingsConfig />,
			},
			{
				path: '/settings/users/:config',
				element: <UsersConfig />,
			},
			{
				path: '/pages/:config',
				element: <PagesConfig />,
			},
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
