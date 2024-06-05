import { z } from 'zod';
import { productBasicInfoSchema } from 'src/app/components/optimized/Forms/Product/sections/BasicInfo/utils';
import { productDescriptionAndSpecificationsRawSchema } from 'src/app/components/optimized/Forms/Product/sections/DescriptionAndSpecifications/utils';
import { productPricingSchema } from 'src/app/components/optimized/Forms/Product/sections/Pricing/utils';
import { productInventoryBranchesSchema } from 'src/app/components/optimized/Forms/Product/sections/Stock/utils';
import { productShippingSchema } from 'src/app/components/optimized/Forms/Product/sections/Shipping/utils';
import { productSeoSchema } from 'src/app/components/optimized/Forms/Product/sections/Seo/utils';
import { productFaqsSchema } from 'src/app/components/optimized/Forms/Product/sections/Faqs/utils';
import { productOptionsAndVariationsRawSchema } from 'src/app/components/optimized/Forms/Product/sections/OptionsAndVariations/utils';

export const ProductSchema = {
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	...productBasicInfoSchema,
	...productDescriptionAndSpecificationsRawSchema,
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
