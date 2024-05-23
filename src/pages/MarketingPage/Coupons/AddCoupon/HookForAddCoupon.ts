// import { z } from 'zod';
// import { newDiscountInterface } from '../../Discounts/NewDiscount/HookForNewDiscount';
// export interface newCouponInterface extends newDiscountInterface {
// 	usage: number;
// }

// export default function useCustomHookAddCoupon() {
// 	const handelDefaultValue = () => {
// 		return {
// 			name: '',
// 			percentage: 0,
// 			value: 0,
// 			sales: 0,
// 			miniQuantity: 0,
// 			usage: 0,
// 			endDate: null,
// 		};
// 	};

// 	const couponSchema = {
// 		name: z.string().min(3).max(60),
// 		percentage: z.coerce.number().min(0).max(100),
// 		value: z.coerce.number().min(0),
// 		sales: z.coerce.number().min(0),
// 		miniQuantity: z.coerce.number().min(0),
// 		usage: z.coerce.number().min(0),
// 		endDate: z.date().nullable().optional(),
// 	};

// 	return {
// 		handelDefaultValue,
// 		couponSchema,
// 	};
// }

import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import { z } from 'zod';

export interface newDiscountInterface {
	couponCode: string;
	discountType: string;
	discountValue?: number;
	discountPercentage?: number;
	applyToType: string;
	specificCategories?: selectItemsInterface[];
	specificProducts?: selectItemsInterface[];
	selectProductsX?: selectItemsInterface[];
	ProductXToProductYType?: string;
	quantityGets?: number;
	percentageGets?: number;
	selectProductsY?: selectItemsInterface[];
	sales: number;
	miniQuantity: number;

	date?: {
		year: number;
		month: number;
		day: number;
	} | null;
}

export default function useCustomHookNewDiscount() {
	const handelDefaultValue = () => {
		return {
			discountName: '',
			discountType: 'Free shipping',
			discountValue: 0,
			discountPercentage: 0,
			applyToType: 'All products',
			specificCategories: [],
			specificProducts: [],
			selectProductsX: [],
			ProductXToProductYType: 'Free',
			quantityGets: 0,
			percentageGets: 0,
			selectProductsY: [],
			sales: 0,
			miniQuantity: 0,
			date: null,
		};
	};

	const discountSchema = (
		discountType: string,
		applyToType: string,
		productXtoYType: string | undefined,
	) => {
		return {
			discountName: z.string().min(3).max(60),
			discountType: z.string().min(3),
			discountValue:
				discountType === 'Fixed amount'
					? z.coerce.number().min(1)
					: z.optional(z.coerce.number().min(1)).or(z.literal(0)),
			discountPercentage:
				discountType === 'Percentage'
					? z.coerce.number().min(1)
					: z.optional(z.coerce.number().min(1)).or(z.literal(0)),
			applyToType: z.string().min(3),

			specificCategories:
				applyToType === 'Specific category'
					? z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
					  )
					: z.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
					  ),
			specificProducts:
				applyToType === 'Specific products'
					? z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
					  )
					: z.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
					  ),
			selectProductsX:
				applyToType === 'Buy x get y'
					? z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
					  )
					: z.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
					  ),
			ProductXToProductYType:
				applyToType === 'Buy x get y'
					? z.string().min(1)
					: z.optional(z.string().min(1)).or(z.literal('')),
			percentageGets:
				productXtoYType === 'Specify percentage'
					? z.coerce.number().min(0).max(100)
					: z.optional(z.coerce.number().min(0).max(100)),
			quantityGets:
				productXtoYType === 'Specify percentage'
					? z.coerce.number().min(0).max(100)
					: z.optional(z.coerce.number().min(0).max(100)),

			selectProductsY:
				applyToType === 'Buy x get y'
					? z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
					  )
					: z.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
					  ),
			sales: z.coerce.number().min(1),

			miniQuantity: z.coerce.number().min(0),

			date: z
				.object({
					year: z.number().min(2024),
					month: z.number().min(1).max(12),
					day: z.number().min(1).max(31),
				})
				.nullable()
				.optional(),
		};
	};

	return {
		handelDefaultValue,
		discountSchema,
	};
}
