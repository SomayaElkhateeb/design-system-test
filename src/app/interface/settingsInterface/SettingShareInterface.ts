export interface Link {
	url: string | null;
	label: string;
	active: boolean;
}

export interface Links {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface Meta {
	current_page: number;
	from: number;
	last_page: number;
	links: Link[];
	path: string;
	per_page: number;
	to: number;
	total: number;
}

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