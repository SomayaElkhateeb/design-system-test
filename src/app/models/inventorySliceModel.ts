import { statusGlobal } from '.';
import { Product } from 'src/pages/ProductsPage/tabs/AllProducts/AllProducts';

export interface inventorySliceModel extends statusGlobal {
	inventory: Product[];
}
