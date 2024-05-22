import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import i18n from './app/language/i18n';
import { UseLanguage } from './app/components/CustomHook/LanguageHook';
import RootLayout from './pages/RootLayout';
import { ErrorPage } from './pages';
import { routes } from './routes';
import RegistrationPage from './pages/AuthPage/Registration/RegistrationPage';
import LoginPage from './pages/AuthPage/Login/LoginPage';

// Create browser router instance
const router = createBrowserRouter([
	// RootLayout Routes
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: routes,
	},
	// Registration Routes
	{
		path: '/auth',
		// element: <AuthPage />,
		children: [
			{ path: 'register', element: <RegistrationPage /> },
			{ path: 'login', element: <LoginPage /> },
		],
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
