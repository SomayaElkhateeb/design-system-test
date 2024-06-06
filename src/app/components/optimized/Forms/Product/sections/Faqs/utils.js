import { z } from 'zod';

export const faqRawSchema = {
	faq: z.object({
		tempId: z.string(),
		questionEn: z.string().min(3).max(100),
		questionAr: z.string().min(3).max(100),
		answerEn: z.string().min(3).max(1000),
		answerAr: z.string().min(3).max(1000),
	}),
};

export const productFaqsSchema = {
	faqs: z.array(faqRawSchema.faq),
};
