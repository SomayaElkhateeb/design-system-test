import { z } from 'zod';

export const productPricingSchema = {
	price: z.coerce.number().min(0).default(0),
	discountPrice: z.coerce.number().min(0).optional(),
	costPrice: z.coerce.number().min(0),
	isTaxable: z.boolean().default(true),
	// add bulk pricing???
};