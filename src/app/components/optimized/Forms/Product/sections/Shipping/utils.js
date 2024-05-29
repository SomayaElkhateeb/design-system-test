import { z } from 'zod';

export const productShippingSchema = {
	isShippableOrPickupable: z.boolean().default(true),
	weight: z.coerce.number().min(0),
	weightUnit: z.enum(['kg', 'g', 'lb', 'oz']),
	dimensions: z.object({
		length: z.coerce.number().min(0),
		width: z.coerce.number().min(0),
		height: z.coerce.number().min(0),
	}),
	dimensionUnit: z.enum(['cm', 'm', 'mm', 'in', 'ft']),
	// more advanced shipping options???
};
