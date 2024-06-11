import { useParams } from 'react-router-dom';
import AllProducts from '../tabs/AllProducts/AllProducts';
import Categories from '../tabs/Categories/Categories';
import Barnds from '../tabs/Barnds/Barnds';
import Inventory from '../tabs/Inventory/Inventory';

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
