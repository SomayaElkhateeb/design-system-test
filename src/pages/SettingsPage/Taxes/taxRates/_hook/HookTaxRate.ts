
import { z } from "zod";

export interface TaxRateInterface {
	identifier: string;
	is_zip: number;
	zip_code: string;
	zip_from: number;
	zip_to: number;
	country: string;
	tax_rate: string;
	// taxes: {
	// 	general: {
	// 		applied_to: string;
	// 		include_in_product_prices: number;
	// 		default_class: string;
	// 		display_in_checkout: string;
	// 	}
	// }
}
// ////////////////////////
export default function useCustomHookTaxRate() {

	// Constants
	const handelDefaultValue = () => {
		return {
			identifier: '',
			is_zip: 0,
			zip_code: '',
			zip_from: 0,
			zip_to: 0,
			country: '',
			tax_rate: '',
			// taxes: {
			// 	general: {
			// 		applied_to: 'sub total',
			// 		include_in_product_prices: 0,
			// 		default_class: 'none',
			// 		display_in_checkout: 'hide tax',
			// 	}
			// }
		};
	};
	const zodString = z.string().min(1);
	const zodNumber =  z.coerce.number().positive().min(1);

	const taxRateSettingsSchema = {
		identifier: zodString,
		is_zip: z.coerce.number().min(0).max(1),
		zip_code: zodNumber,
		zip_from: zodNumber,
		zip_to: zodNumber,
		country: zodString,
		tax_rate: zodString,
		// taxes: {
		// 	general: {
		// 		applied_to: zodString,
		// 		include_in_product_prices: z.coerce.number().min(0).max(1),
		// 		default_class: zodString,
		// 		display_in_checkout: zodString,
		// 	}
		// }
	};

	return {
		taxRateSettingsSchema,
		handelDefaultValue
	}
}