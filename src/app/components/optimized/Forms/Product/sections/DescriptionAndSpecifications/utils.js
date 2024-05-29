import { z } from 'zod';

export const productDescriptionAndSpecificationsSchema = {
	descriptionEn: z.string().min(10).max(1000),
	descriptionAr: z.string().min(10).max(1000),
	// specification
};
