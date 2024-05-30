import { z } from 'zod';

export const optionTypeMap = /** @type {const} */ ({
	checkbox: 'checkbox',
	radio: 'radio',
	dropdown: 'dropdown',
	text: 'text',
	image: 'image',
	color: 'color',
});
export const optionTypeCollection =
	/** @type {[keyof typeof optionTypeMap, ...(keyof typeof optionTypeMap)[]]} */ (
		/** @type {unknown} */ (Object.values(optionTypeMap))
	);
const optionTypeSchema = z.enum(optionTypeCollection);

export const optionNameMap = /** @type {const} */ ({
	size: 'size',
	color: 'color',
});
export const optionNameCollection =
	/** @type {[keyof typeof optionNameMap, ...(keyof typeof optionNameMap)[]]} */ (
		/** @type {unknown} */ (Object.values(optionNameMap))
	);

export const optionBaseValuesSchema = z.object({
	tempId: z.string(),
	nameEn: z.string(),
	nameAr: z.string(),
	differentInPrice: z.number().optional(),
	value: z.string(),
});

export const productOptionSchema = {
	option: z.discriminatedUnion('name', [
		z.object({
			tempId: z.string(),
			isRequired: z.boolean().optional(),
			name: z.literal(optionNameMap.size),
			type: optionTypeSchema,
			values: z.array(optionBaseValuesSchema),
		}),
		z.object({
			tempId: z.string(),
			isRequired: z.boolean().optional(),
			name: z.literal(optionNameMap.color),
			type: optionTypeSchema,
			values: z.array(optionBaseValuesSchema),
		}),
	]),
};

export const productVariationSchema = {
	variation: z.object({
		forOptionValuesNames: z.string(),
		forOptionValuesTempIds: z.array(z.string()),
		quantity: z.number().min(0).optional(),
		sku: z.string().optional(),
		price: z.number().min(0).optional(),
		discountPrice: z.number().min(0).optional(),
	}),
};

export const productOptionsAndVariationsSchema = {
	options: z.array(productOptionSchema.option),
	variations: z.array(productVariationSchema.variation),
};
