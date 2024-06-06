import { z } from 'zod';
import { productTypeCollection } from '../../config';

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
		Object.fromEntries(productShippingRateCollection.map((item) => [item, item]))
	);

export const productShippingMethodCollection = /** @type {const} */ (['Dhl (main)', 'Aramex']);
export const productShippingMethodMap =
	/** @type {{ [Key in typeof productShippingMethodCollection[number]]: typeof productShippingMethodCollection[number] }} */ (
		Object.fromEntries(productShippingMethodCollection.map((item) => [item, item]))
	);

export const productWeightUnitCollection = /** @type {const} */ (['kg', 'g', 'lb', 'oz']);
export const productWeightUnitMap =
	/** @type {{ [Key in typeof productWeightUnitCollection[number]]: typeof productWeightUnitCollection[number] }} */ (
		Object.fromEntries(productWeightUnitCollection.map((item) => [item, item]))
	);

export const productDimensionUnitCollection = /** @type {const} */ (['cm', 'm', 'mm', 'in', 'ft']);
export const productDimensionUnitMap =
	/** @type {{ [Key in typeof productDimensionUnitCollection[number]]: typeof productDimensionUnitCollection[number] }} */ (
		Object.fromEntries(productDimensionUnitCollection.map((item) => [item, item]))
	);

export const productShippingTypeCollection = /** @type {const} */ (['online', 'pickup']);
export const productShippingTypeMap =
	/** @type {{ [Key in typeof productShippingTypeCollection[number]]: typeof productShippingTypeCollection[number] }} */ (
		Object.fromEntries(productShippingTypeCollection.map((type) => [type, type]))
	);

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
