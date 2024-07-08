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
	pivot: {
		tax_category_id: number;
		tax_rate_id: number;
		id: number;
	};
}

interface TaxCategory {
	id: number;
	code: string;
	name: string;
	description: string;

	tax_rates: TaxRate[];
	created_at: string;
	updated_at: string;
}

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
