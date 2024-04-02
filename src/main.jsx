import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './app/store';
import './index.css';

const rootElem = document.getElementById('root');

if (!rootElem) {
	throw new Error("Root element wasb't found");
}

const root = ReactDOM.createRoot(rootElem);
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
