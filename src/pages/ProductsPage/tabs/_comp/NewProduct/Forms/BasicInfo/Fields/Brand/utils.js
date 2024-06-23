import { z } from 'zod';

export const productBrandSchema = {
	brand: z.string().min(3).max(50),
};
