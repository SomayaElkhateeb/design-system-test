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
}

interface Link {
	url: string | null;
	label: string;
	active: boolean;
}

interface Meta {
	current_page: number;
	from: number;
	last_page: number;
	links: Link[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}

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
