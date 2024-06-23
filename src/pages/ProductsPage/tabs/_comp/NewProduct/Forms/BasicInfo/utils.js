import { z } from 'zod';
import { productCategorySchema } from './Fields/Category/utils';
import { productBrandSchema } from './Fields/Brand/utils';

export const productBasicInfoSchema = {
	nameEn: z.string().min(3).max(50),
	nameAr: z.string().min(3).max(50),
	sku: z.preprocess((arg) => (!arg ? undefined : arg), z.string().min(3).max(50).optional()),
	...productBrandSchema,
	...productCategorySchema,
};
