import { z } from 'zod';

export const productQuickActionsSchema = {
	isAvailableOnStore: z.boolean().default(true),
	isFeaturedOnTheFrontPage: z.boolean().default(false),
};
