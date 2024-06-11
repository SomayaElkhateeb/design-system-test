import { z } from 'zod';
import { productBasicInfoSchema } from '../_comp//Forms/Product/sections/BasicInfo/utils';
import { productDescriptionAndSpecificationsRawSchema } from '../_comp//Forms/Product/sections/DescriptionAndSpecifications/utils';
import { productPricingSchema } from '../_comp//Forms/Product/sections/Pricing/utils';
import { productInventoryBranchesSchema } from '../_comp//Forms/Product/sections/Stock/utils';
import { productSeoSchema } from '../_comp//Forms/Product/sections/Seo/utils';
import { productFaqsSchema } from '../_comp//Forms/Product/sections/Faqs/utils';
import { productOptionsAndVariationsRawSchema } from '../_comp//Forms/Product/sections/OptionsAndVariations/utils';
import { productQuickActionsSchema } from '../_comp//Forms/Product/sections/QuickActions/utils';
import { productBundleSchema } from '../_comp//Forms/Product/sections/Bundle/utils';
import { productShippingSchema } from '../_comp//Forms/Product/sections/Shipping/utils';

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
