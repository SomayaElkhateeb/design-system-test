import { z } from 'zod';

export const productFaqsSchema = {
	faqs: z.array(
		z.object({
			question: z.string().min(3).max(100),
			answer: z.string().min(3).max(1000),
		}),
	),
};
