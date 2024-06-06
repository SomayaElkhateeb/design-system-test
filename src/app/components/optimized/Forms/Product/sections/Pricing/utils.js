import { z } from 'zod';

export const productPricingSchema = {
	price: z.coerce.number().min(0).default(0),
	discountPrice: z.coerce.number().min(0).optional(),
	costPrice: z.coerce.number().min(0),
	isTaxable: z.boolean().default(true),
	bulkPrices: z.array(
		z.object({
			tempId: z.string(),
			from: z.coerce.number().min(0),
			to: z.coerce.number().min(0),
			currency: z.string(),
		}),
	),
};
