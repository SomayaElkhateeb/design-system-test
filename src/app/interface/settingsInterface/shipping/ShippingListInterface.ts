interface ShippingMethodFree {
	active: string;
	code: string;
	method: string;
	title: string;
	description: string;
}

interface FlatRateShippingMethod extends ShippingMethodFree {
	default_rate: string;
	type: string;
}

interface MPDHLShippingMethod extends ShippingMethodFree {
	type: string;
	sandbox_mode: string;
	access_id: string;
	password: string;
	account_number: string;
	weight_unit: string;
	dimension_unit: string;
	content_type: string;
	allowed_methods: string;
	ready_time: string;
	allow_seller: string;
	allowed_country: string;
	price_exchange_api: string;
	error_message: string;
}

export interface ShippingListInterface {
	free: ShippingMethodFree;
	flatrate: FlatRateShippingMethod;
	mpdhl: MPDHLShippingMethod;
}
