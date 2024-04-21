import { useParams } from 'react-router-dom';
import AllProducts from 'src/pages/ProductsPage/AllProducts';
import Barnds from 'src/pages/ProductsPage/Barnds';
import Categories from 'src/pages/ProductsPage/Categories';
import Inventory from 'src/pages/ProductsPage/Inventory';

const ProductsTabs = () => {
	//  hooks
	const { tab } = useParams();

	switch (tab) {
		case 'AllProducts':
			return <AllProducts />;
		case 'categories':
			return <Categories />;
		case 'brands':
			return <Barnds />;
		case 'inventory':
			return <Inventory />;

		default:
			return <AllProducts />;
	}
};

export default ProductsTabs;
