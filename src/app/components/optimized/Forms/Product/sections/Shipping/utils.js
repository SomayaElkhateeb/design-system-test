import { z } from 'zod';

export const productStatesOfTheProductCollection = /** @type {const} */ ([
	'fragile',
	'food',
	'solid',
	'Needs lower temperature',
]);
export const productStatesOfTheProductMap =
	/** @type {{ [Key in typeof productStatesOfTheProductCollection[number]]: typeof productStatesOfTheProductCollection[number] }} */ (
		Object.fromEntries(productStatesOfTheProductCollection.map((state) => [state, state]))
	);

export const productShippingRateCollection = /** @type {const} */ (['fixed rate', 'free shipping']);
export const productShippingRateMap =
	/** @type {{ [Key in typeof productShippingRateCollection[number]]: typeof productShippingRateCollection[number] }} */ (
		Object.fromEntries(productShippingRateCollection.map((rate) => [rate, rate]))
	);

export const productShippingMethodCollection = /** @type {const} */ (['Dhl (main)', 'Aramex']);

export const productShippingSchema = {
	isShippableOrPickupable: z.boolean().default(true),
	weight: z.coerce.number().min(0),
	weightUnit: z.enum(['kg', 'g', 'lb', 'oz']),
	dimensions: z.object({
		length: z.coerce.number().min(0),
		width: z.coerce.number().min(0),
		height: z.coerce.number().min(0),
	}),
	dimensionUnit: z.enum(['cm', 'm', 'mm', 'in', 'ft']),
	statesOfTheProduct: z.array(z.enum(productStatesOfTheProductCollection)),
	shippingRate: z.enum(productShippingRateCollection),
	shippingRateValue: z.number().min(0).optional(),
	shippingMethod: z.enum(productShippingMethodCollection),
	// more advanced shipping options???
};
