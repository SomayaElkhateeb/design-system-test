
import { statusGlobal } from "..";
import { TaxCategory } from "src/pages/SettingsPage/Taxes/taxCategories/_hook/HookTaxCategories";


export interface taxCategoriesSettingsSliceModel extends statusGlobal {
	taxCategoriesShow: TaxCategory | null;
	taxCategoriesList: TaxCategory[];

}
