import { z } from 'zod';
import { productTypeCollection } from '../../config';

export const productStatesOfTheProductCollection = [
	'fragile',
	'food',
	'solid',
	'Needs lower temperature',
] as const;

export const productStatesOfTheProductMap = Object.fromEntries(
	productStatesOfTheProductCollection.map((state) => [state, state]),
) as {
	[Key in (typeof productStatesOfTheProductCollection)[number]]: (typeof productStatesOfTheProductCollection)[number];
};

export const productShippingRateCollection = ['fixed rate', 'free shipping'] as const;

export const productShippingRateMap = Object.fromEntries(
	productShippingRateCollection.map((item) => [item, item]),
) as {
	[Key in (typeof productShippingRateCollection)[number]]: (typeof productShippingRateCollection)[number];
};

export const productShippingMethodCollection = ['Dhl (main)', 'Aramex'] as const;

export const productShippingMethodMap = Object.fromEntries(
	productShippingMethodCollection.map((item) => [item, item]),
) as {
	[Key in (typeof productShippingMethodCollection)[number]]: (typeof productShippingMethodCollection)[number];
};

export const productWeightUnitCollection = ['kg', 'g', 'lb', 'oz'] as const;

export const productWeightUnitMap = Object.fromEntries(
	productWeightUnitCollection.map((item) => [item, item]),
) as {
	[Key in (typeof productWeightUnitCollection)[number]]: (typeof productWeightUnitCollection)[number];
};

export const productDimensionUnitCollection = ['cm', 'm', 'mm', 'in', 'ft'] as const;

export const productDimensionUnitMap = Object.fromEntries(
	productDimensionUnitCollection.map((item) => [item, item]),
) as {
	[Key in (typeof productDimensionUnitCollection)[number]]: (typeof productDimensionUnitCollection)[number];
};

export const productShippingTypeCollection = ['online', 'pickup'] as const;

export const productShippingTypeMap = Object.fromEntries(
	productShippingTypeCollection.map((type) => [type, type]),
) as {
	[Key in (typeof productShippingTypeCollection)[number]]: (typeof productShippingTypeCollection)[number];
};

export const productShippingSchema = {
	productType: z.enum(productTypeCollection),
	shipping: z.discriminatedUnion('type', [
		z.object({
			type: z.literal(productShippingTypeMap.online),
			downloadLink: z.string().url(),
		}),
		z.object({
			type: z.literal(productShippingTypeMap.pickup),
			isShippableOrPickupable: z.boolean().default(true),
			weight: z.coerce.number().min(0),
			weightUnit: z.enum(productWeightUnitCollection),
			dimensions: z.object({
				length: z.coerce.number().min(0),
				width: z.coerce.number().min(0),
				height: z.coerce.number().min(0),
			}),
			dimensionUnit: z.enum(productDimensionUnitCollection),
			statesOfTheProduct: z.array(z.enum(productStatesOfTheProductCollection)),
			rateType: z.enum(productShippingRateCollection),
			rateValue: z.number().min(0).optional(),
			method: z.enum(productShippingMethodCollection),
		}),
	]),
};
