import { z } from 'zod';

const optionTypeSchema = z.union([
	z.literal('checkbox'),
	z.literal('radio'),
	z.literal('dropdown'),
	z.literal('text'),
	z.literal('image'),
	z.literal('color'),
]);

const optionBaseValuesSchema = z.object({
	tempId: z.string(),
	name: z.string(),
	differentInPrice: z.number().optional(),
});

export const productOptionsAndVariationsSchema = {
	options: z.array(
		z.discriminatedUnion('name', [
			z.object({
				name: z.literal('size'),
				type: optionTypeSchema,
				values: z.array(
					optionBaseValuesSchema.merge(
						z.object({
							image: z.instanceof(File),
						}),
					),
				),
			}),
			z.object({
				name: z.literal('color'),
				type: optionTypeSchema,
				values: z.array(
					optionBaseValuesSchema.merge(
						z.object({
							color: z.instanceof(File),
						}),
					),
				),
			}),
		]),
	),
	variations: z.array(
		z.object({
			tempId: z.string(),
			quantity: z.number().min(0).optional(),
			sku: z.string(),
			price: z.number().min(0).optional(),
			discountPrice: z.number().min(0).optional(),
		}),
	),
};
