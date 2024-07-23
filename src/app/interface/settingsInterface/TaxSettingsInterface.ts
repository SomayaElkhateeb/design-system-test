
interface TaxCategory {
	id: number;
	code: string;
	name: string;
	description: string;

	tax_rates: TaxRate[];
	created_at: string;
	updated_at: string;
}
//////////////////////////////////////////////////////////////
export interface TaxRate {
	id: number;
	identifier: string;
	is_zip: number;
	zip_code: string | null;
	zip_from: string;
	zip_to: string;
	state: string;
	country: string;
	tax_rate: string;
	created_at: string;
	updated_at: string;
	company_id: number;
	pivot?: {
		tax_category_id: number;
		tax_rate_id: number;
		id: number;
	};
}
// tax rates list
export interface TaxRatesResponse {
	data: TaxRate[];
}

// tax rates show 
export interface TaxRateShowResponse{
	data: TaxRate;
}

// tax category list
export interface TaxCategoriesListResponse {
	data: TaxCategory[];
}

// tax category show 
export interface TaxCategoryShow {
	id: number;
	code: string;
	name: string;
	description: string;
	tax_rates: TaxRate[];
	created_at: string;
	updated_at: string;
}