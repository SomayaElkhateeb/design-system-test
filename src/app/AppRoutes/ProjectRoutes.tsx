import LoginPage from 'src/pages/AuthPage/Login/LoginPage';
import { PagesRoutes } from './ProjectRoutesData';
import { Navigate, Outlet, Route } from 'react-router-dom';
import RegistrationPage from 'src/pages/AuthPage/Registration/RegistrationPage';
import ForgotPassword from 'src/pages/AuthPage/ForgotPassword/ForgotPassword';
import { ErrorPage } from 'src/pages';
import RootLayout from 'src/pages/RootLayout';
import AnimatedRoutes from '../navigation/animated-routes.component';

const ProjectRoutes = () => {
	let token: null | undefined | string = '';
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('token');
	}
	const PrivateRoutesProject = () => {
		
		return token ? <Outlet /> : <Navigate to='/login' />;
	};
	const PrivateRoutesLoginPage = () => {
		
		return !token ? <Outlet /> : <Navigate to='/home' />;
	};
	
	return (
		<AnimatedRoutes>
			<Route element={<PrivateRoutesLoginPage />}>
				<Route path='/' element={<Navigate to={token ? '/home' : '/login'} />} />
				<Route path='/register' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/forgot_password' element={<ForgotPassword />} />

				<Route path='/' element={<LoginPage />} />
			</Route>

			{/* Dashboard */}

			<Route element={<PrivateRoutesProject />}>
				{PagesRoutes.map((route) => {
					if (route?.children && route?.children?.length > 0) {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<RootLayout>{route.element}</RootLayout>}
							>
								{route.children?.map((e) => (
									<Route key={e.path} path={e.path} element={e.element} />
								))}
							</Route>
						);
					} else
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<RootLayout>{route.element}</RootLayout>}
							/>
						);
				})}
			</Route>

			{/* Other */}
			<Route path='/*' element={<ErrorPage />} />
		</AnimatedRoutes>
	);
};

export default ProjectRoutes;
