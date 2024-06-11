import { z } from 'zod';

export const productBrandSchema = {
	brand: z.preprocess(
		(arg) => (!arg ? undefined : arg),
		z
			.object({
				id: z.string(),
				name: z.string().min(3).max(50),
			})
			.optional(),
	),
};
