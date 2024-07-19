import { Meta, TaxRate } from "./SettingShareInterface";

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

// tax rates list
export interface TaxRatesResponse {
	data: TaxRate[];
	links: {
		first: string;
		last: string;
		prev: string | null;
		next: string | null;
	};
	meta: Meta;
}

// tax rates show 
export interface TaxRateShowResponse{
	data: TaxRate;
}

// tax category list
export interface TaxCategoriesListResponse {
	data: TaxCategory[];
	links: {
		first: string;
		last: string;
		prev: string | null;
		next: string | null;
	};
	meta: {
		current_page: number;
		from: number;
		last_page: number;
		links: {
			url: string | null;
			label: string;
			active: boolean;
		}[];
		path: string;
		per_page: number;
		to: number;
		total: number;
	};
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