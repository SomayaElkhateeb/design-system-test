
import { z } from "zod";



// ////////////////////////
export default function useCustomHookTaxesForm() {

	// Constants
	const handelDefaultValue = () => {
		return {
			taxAppliesTo: 'Subtotal',
			includeTaxInProductPrices: false,
			defaultTaxClass: 'None',
			taxDisplayInCheckout: 'Hide tax',
			zoneDefinedBy: 'Shipping address',
			checkOutWith:'Email & phone'
		};
	};
	const taxesSettingsSchema = {
		taxAppliesTo: z.string().min(1),
		includeTaxInProductPrices: z.boolean().default(false),
		defaultTaxClass: z.string().min(1),
		taxDisplayInCheckout: z.string().min(1),
		zoneDefinedBy: z.string().min(1),
		checkOutWith: z.string().min(1),
	};



	return {
		taxesSettingsSchema,
		handelDefaultValue
	}
}