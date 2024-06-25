import { z } from 'zod';

export const productQuickActionsSchema = {
	isAvailableOnStore: z.boolean().default(true),
	isFeaturedOnTheFrontPage: z.boolean().default(false),
};

// Define default values for the schema
export const productQuickActionsDefaultValues = {
	isAvailableOnStore: true,
	isFeaturedOnTheFrontPage: false,
};
