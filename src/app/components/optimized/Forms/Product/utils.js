import { z } from 'zod';
import { productBasicInfoSchema } from './sections/BasicInfo/utils';
import { productDescriptionAndSpecificationsSchema } from './sections/DescriptionAndSpecifications/utils';
import { productPricingSchema } from './sections/Pricing/utils';
import { productInventoryBranchesSchema } from './sections/Stock/utils';
import { productShippingSchema } from './sections/Shipping/utils';
import { productSeoSchema } from './sections/Seo/utils';
import { productFaqsSchema } from './sections/Faqs/utils';
import { productOptionsAndVariationsRawSchema } from './sections/OptionsAndVariations/utils';

export const ProductSchema = {
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	...productBasicInfoSchema,
	...productDescriptionAndSpecificationsSchema,
	...productPricingSchema,
	// add bulk pricing???
	...productInventoryBranchesSchema,
	...productShippingSchema,
	// more advanced shipping options???
	...productOptionsAndVariationsRawSchema,
	// options: z.array(
	...productSeoSchema,
	...productFaqsSchema,
};
