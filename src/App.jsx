import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import i18n from './app/language/i18n';
import { UseLanguage } from './app/components/CustomHook/LanguageHook';
import RootLayout from './pages/RootLayout';
import { ErrorPage } from './pages';
import { routes } from './routes';

// Create browser router instance

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
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
