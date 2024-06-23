import { z } from 'zod';

export const productCategorySchema = {
	category: z.string().min(3).max(50),
};
