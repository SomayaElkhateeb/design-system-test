import { useParams } from "react-router-dom";
import Orders from "../Orders/Orders";
import Products from "../Products/Products";
import Overview from "../Overview/Overview";
import Customers from "../Customers/Customers";
import Integrations from "../Integrations/Integrations";


const AnalyticsTabs = () => {
const { tab } = useParams();

const tabs = {
  orders: <Orders />,
  products: <Products />,
  overview: <Overview />,
  customers: <Customers />,
  integrations: <Integrations />,
};
return tabs[tab];
}

export default AnalyticsTabs
