import { z } from 'zod';

export const productSeoSchema = {
	pageTitle: z.string().min(3).max(70),
	// link: z.string().url(),
	metaKeywords: z.array(z.string().min(3)).max(10),
	metaDescription: z.string().min(3).max(160),
};

// Define default values for the schema
export const productSeoDefaultValues = {
	pageTitle: '',
	metaKeywords: [],
	metaDescription: '',
};
