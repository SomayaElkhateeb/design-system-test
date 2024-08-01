interface ShippingMethodFree {
	active: string;
	code: string;
	method: string;
	title: string;
	description: string;
}

interface FlatRateShippingMethod extends shippingMethodsInterface {
	default_rate: string;
	type: string;
}

interface MPDHLShippingMethod extends shippingMethodsInterface {
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

// shipping list
export interface ShippingListInterface {
	free: shippingMethodsInterface;
	flatrate: shippingMethodsInterface;
	mpdhl: MPDHLShippingMethod;
}
// shipping methods
export interface shippingMethodsInterface {
	code: string;
	method: string;
	method_title: string;
	description: string;
	icon: string;
	default_rate: string;
	type: string;
}

export const initialShippingMethd = () => {
	return {
		free: {
			code: "",
			method: "",
			method_title: "",
			description: "",
			icon: "",
			default_rate: '',
			type: ''
		},
		flatrate: {
			code: "",
			method: "",
			method_title: "",
			description: "",
			icon: "",
			default_rate: '',
			type: ''
		},
		mpdhl: {
			code: "",
			method: "",
			method_title: "",
			description: "",
			icon: "",
			default_rate: '',
			type: ''
		}


	}
}
