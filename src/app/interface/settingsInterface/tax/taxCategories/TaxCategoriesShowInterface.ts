import { TaxRate } from './TaxCategoriesListInterface';

export interface TaxCategoryShow {
	id: number;
	code: string;
	name: string;
	description: string;
	tax_rates: TaxRate[];
	created_at: string;
	updated_at: string;
}
