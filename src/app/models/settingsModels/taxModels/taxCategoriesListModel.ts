import { TaxCategoriesListResponse } from 'src/app/interface/settingsInterface/tax/taxCategories/TaxCategoriesListInterface';
import { statusGlobal } from '../..';

export interface taxCategoriesListSliceModel extends statusGlobal {
	taxCategoriesList: TaxCategoriesListResponse[];
}
