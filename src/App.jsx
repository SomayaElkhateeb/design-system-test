import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import i18n from './app/language/i18n';
import { UseLanguage } from './app/components/CustomHook/LanguageHook';
import RootLayout from './pages/RootLayout';
import ShippingConfig from './app/components/page/SettingPage/Shipping/ShippingConfig';
import PagesConfig from './pages/PagesPage/comp/PagesConfig';
import Nested_pages_SettingsConfig from './app/components/page/SettingPage/Nested_Settings_pagesConfig';
import Config from './app/components/page/SettingPage/Shipping/Comp/Config';
import { ErrorPage } from './pages';
import { routes } from './routes';

// Create browser router instance

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,

		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/apps', element: <AppsPage />, children: [{ path: ':tab', element: <AppsTabs /> }] },
			{ path: '/pages', element: <PagesPage /> },
			{ path: '/pages/:config', element: <PagesConfig /> },
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

		children: routes,

	},
]);

// App component
const App = () => {
	const language = UseLanguage();

	useEffect(() => {
		// Change language and direction
		const newLanguage = language === 'ar' ? 'ar' : 'en';
		i18n.changeLanguage(newLanguage);
		document.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';

		// Change font family based on language
		const root = document.getElementById('root');
		root?.style.setProperty(
			'--font-family',
			newLanguage === 'ar' ? 'var(--font-family-ar)' : 'var(--font-family-en)',
		);
	}, [language, i18n]);

	return <RouterProvider router={router} />;
};

export default App;
