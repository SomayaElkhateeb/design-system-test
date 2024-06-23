import { statusGlobal } from '.';
import { Product } from 'src/pages/ProductsPage/tabs/AllProducts/AllProducts';

export interface productsSliceModel extends statusGlobal {
	allProducts: Product[];
}
