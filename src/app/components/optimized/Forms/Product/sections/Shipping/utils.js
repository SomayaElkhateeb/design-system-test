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

export const productWeightUnitCollection = /** @type {const} */ (['kg', 'g', 'lb', 'oz']);
export const productWeightUnitMap =
	/** @type {{ [Key in typeof productWeightUnitCollection[number]]: typeof productWeightUnitCollection[number] }} */ (
		Object.fromEntries(productWeightUnitCollection.map((unit) => [unit, unit]))
	);

export const productDimensionUnitCollection = /** @type {const} */ (['cm', 'm', 'mm', 'in', 'ft']);
export const productDimensionUnitMap =
	/** @type {{ [Key in typeof productDimensionUnitCollection[number]]: typeof productDimensionUnitCollection[number] }} */ (
		Object.fromEntries(productDimensionUnitCollection.map((unit) => [unit, unit]))
	);

export const productShippingSchema = {
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
	shippingRate: z.enum(productShippingRateCollection),
	shippingRateValue: z.number().min(0).optional(),
	shippingMethod: z.enum(productShippingMethodCollection),
	// more advanced shipping options???
};
