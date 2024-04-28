import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import store from './app/store';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
const rootElem = document.getElementById('root');

if (!rootElem) {
	throw new Error("Root element wasb't found");
}
const clientId = '536550897700-0lpl9nm5kgd5sra85d8jb4qgj48shp1m.apps.googleusercontent.com';
const root = ReactDOM.createRoot(rootElem);
root.render(
	<StrictMode>
		<GoogleOAuthProvider clientId={clientId}>
			<Provider store={store}>
				<App />
			</Provider>
		</GoogleOAuthProvider>
	</StrictMode>,
);
