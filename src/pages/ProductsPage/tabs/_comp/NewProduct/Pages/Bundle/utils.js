import { z } from 'zod';
import {
	productDescriptionAndSpecificationsRawSchema,
	productFaqsSchema,
	productInventoryBranchesSchema,
	productOptionsAndVariationsRawSchema,
	productPricingSchema,
	productQuickActionsSchema,
	productSeoSchema,
	productShippingSchema,
	productBundleSchema,
	productBasicInfoSchema
} from '../../Forms';

export const ProductSchema = {
	...productShippingSchema,
	...productBundleSchema,
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	...productBasicInfoSchema,
	...productDescriptionAndSpecificationsRawSchema,
	...productPricingSchema,
	...productInventoryBranchesSchema,
	...productOptionsAndVariationsRawSchema,
	...productSeoSchema,
	...productFaqsSchema,
	...productQuickActionsSchema,
};
