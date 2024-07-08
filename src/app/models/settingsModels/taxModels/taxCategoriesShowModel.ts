import { TaxCategoryShow } from './../../../interface/settingsInterface/tax/taxCategories/TaxCategoriesShowInterface';
import { statusGlobal } from '../..';

export interface taxCategoriesShowSliceModel extends statusGlobal {
	taxCategoriesShow: TaxCategoryShow[];
}
