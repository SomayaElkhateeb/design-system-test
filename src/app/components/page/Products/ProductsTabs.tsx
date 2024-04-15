import { useParams } from 'react-router-dom';
import AllProducts from 'src/pages/ProductsPage/AllProducts';
import Barnds from 'src/pages/ProductsPage/Barnds';
import Categories from 'src/pages/ProductsPage/Categories';
import Inventory from 'src/pages/ProductsPage/Inventory';


const ProductsTabs = () => {
	const { tab } = useParams();

	const tabs = {
		AllProducts: <AllProducts />,
		categories: <Categories />,
		brands: <Barnds />,
		inventory: <Inventory />,
	};

	return tabs[tab];
};

export default ProductsTabs;
