import { useParams } from 'react-router-dom';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';
import Overview from '../Overview/Overview';
import Customers from '../Customers/Customers';
import Integrations from '../Integrations/Integrations';

export default function AnalyticsTabs() {
	const { tab } = useParams();
	switch (tab) {
		case 'orders':
			return <Orders />;
		case 'products':
			return <Products />;
		case 'overview':
			return <Overview />;
		case 'customers':
			return <Customers />;
		case 'integrations':
			return <Integrations />;

		default:
			return <Orders />;
	}
}

// Define an object 'tabs' that maps tab names to corresponding JSX.Element components
// const tabs: { [key: string]: JSX.Element } = {
// 	orders: <Orders />,
// 	products: <Products />,
// 	overview: <Overview />,
// 	customers: <Customers />,
// 	integrations: <Integrations />,
// };
// Handle the case when 'tab' is undefined or not found in 'tabs'
// if (!tab || !tabs.hasOwnProperty(tab)) {
// Return a default component or handle the case as needed
// return <div>Invalid tab</div>;
// }
// Return the component corresponding to the current 'tab'
// return tabs[tab];
