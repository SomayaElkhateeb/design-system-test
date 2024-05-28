import { z } from 'zod';
import { productBasicInfoSchema } from './sections/BasicInfo/utils';

export const ProductSchema = {
	imagesMedia: z.array(z.instanceof(File)),
	videoMedia: z.instanceof(File),
	threeSixtyViewMedia: z.instanceof(File),
	threeDModelMedia: z.instanceof(File),
	// Basic Info
	...productBasicInfoSchema,
	//
	descriptionEn: z.string().min(10).max(1000),
	descriptionAr: z.string().min(10).max(1000),
	// specification
	// pricing
	price: z.coerce.number().min(0).default(0),
	discountPrice: z.coerce.number().min(0).optional(),
	costPrice: z.coerce.number().min(0),
	isTaxable: z.boolean().default(true),
	// add bulk pricing???
	// Stock
	quantity: z.coerce.number().min(0),
	canContinueSellingWhenOutOfStock: z.boolean().default(false),
	branches: z.array(
		z.object({ id: z.string(), name: z.string(), quantity: z.coerce.number().min(0) }),
	),
	// Shipping
	isShippableOrPickupable: z.boolean().default(true),
	weight: z.coerce.number().min(0),
	weightUnit: z.enum(['kg', 'g', 'lb', 'oz']),
	dimensions: z.object({
		length: z.coerce.number().min(0),
		width: z.coerce.number().min(0),
		height: z.coerce.number().min(0),
	}),
	dimensionUnit: z.enum(['cm', 'm', 'mm', 'in', 'ft']),
	// more advanced shipping options???
	// Options & Variants
	// options: z.array(
	// SEO
	pageTitle: z.string().min(3).max(70),
	// link: z.string().url(),
	metaKeywords: z.array(z.string().min(3)).max(10),
	metaDescription: z.string().min(3).max(160),
	// FAQs
	faqs: z.array(
		z.object({
			question: z.string().min(3).max(100),
			answer: z.string().min(3).max(1000),
		}),
	),
};
