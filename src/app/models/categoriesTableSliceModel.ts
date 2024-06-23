import { statusGlobal } from '.';
import { Category } from 'src/pages/ProductsPage/tabs/Categories/Categories';

export interface categoriesTableSliceModel extends statusGlobal {
	categoriesTable: Category[];
}
