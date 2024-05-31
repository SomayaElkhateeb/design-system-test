import { z } from 'zod';

export const productSpecificationsRawSchema = {
	specification: {
		specNameEn: z.string().min(10).max(1000),
		specNameAr: z.string().min(10).max(1000),
		specValueEn: z.string().min(10).max(1000),
		specValueAr: z.string().min(10).max(1000),
	},
};

export const productDescriptionAndSpecificationsRawSchema = {
	descriptionEn: z.string().min(10).max(1000),
	descriptionAr: z.string().min(10).max(1000),
	specifications: z.array(productSpecificationsRawSchema.specification),
};
