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
	productBasicInfoSchema
} from '../../Forms';


export const ProductSchema = {
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	...productBasicInfoSchema,
	...productDescriptionAndSpecificationsRawSchema,
	...productPricingSchema,
	...productInventoryBranchesSchema,
	...productShippingSchema,
	...productOptionsAndVariationsRawSchema,
	...productSeoSchema,
	...productFaqsSchema,
	...productQuickActionsSchema,
};
