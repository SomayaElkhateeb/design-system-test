import { z } from 'zod';
import { productCategorySchema } from '../../fields/Category/utils';

export const productBasicInfoSchema = {
	nameEn: z.string().min(3).max(50),
	nameAr: z.string().min(3).max(50),
	sku: z.preprocess((arg) => (!arg ? undefined : arg), z.string().min(3).max(50).optional()),
	brand: z.preprocess(
		(arg) => (!arg ? undefined : arg),
		z
			.object({
				id: z.string(),
				name: z.string().min(3).max(50),
			})
			.optional(),
	),
	...productCategorySchema,
};
