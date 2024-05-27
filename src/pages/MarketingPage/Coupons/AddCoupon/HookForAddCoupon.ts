import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import { z } from 'zod';

export interface addCouponInterface {
	couponCode: string;
	discountType: string;
	discountValue?: number;
	discountPercentage?: number;
	applyToType: string;
	specificCategories?: selectItemsInterface[];
	specificProducts?: selectItemsInterface[];
	customerSegment: string;
	specificCustomerGroup?: selectItemsInterface[];
	specificCustomer?: selectItemsInterface[];
	miniReq: boolean;
	miniPrice: number;
	miniQuantity: number;
	showLimit: boolean;
	limit: number;
	limitUser: boolean;
	startActivation: { startDate: Date; startTime: string };
	endActivation: { endDate: Date; endTime: string };
	active: boolean;
}

export default function useCustomHookAddCoupon() {
	const handelDefaultValue = () => {
		return {
			couponCode: '',
			discountType: 'Free shipping',
			discountValue: 0,
			discountPercentage: 0,
			applyToType: 'All products',
			specificCategories: [],
			specificProducts: [],
			customerSegment: 'All customers',
			specificCustomerGroup: [],
			specificCustomer: [],
			miniReq: false,
			miniPrice: 0,
			miniQuantity: 0,
			showLimit: false,
			limit: 0,
			date: null,
			limitUser: false,
			startActivation: { startDate: new Date(), startTime: '00:00' },
			endActivation: { endDate: new Date(), endTime: '00:00' },
			active: false,
		};
	};

	const couponSchema = (
		discountType: string,
		applyToType: string,
		customerSegment: string,
		miniReq: boolean,
		showLimit: boolean,
	) => {
		return {
			couponCode: z.string().min(3).max(60),
			discountType: z.string().min(3),
			discountValue:
				discountType === 'Fixed amount'
					? z.coerce.number().positive().min(1)
					: z.optional(z.coerce.number().positive().min(1)).or(z.literal(0)),
			discountPercentage:
				discountType === 'Percentage'
					? z.coerce.number().positive().min(1)
					: z.optional(z.coerce.number().positive().min(1)).or(z.literal(0)),
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

			customerSegment: z.string().min(3),
			specificCustomerGroup:
				customerSegment === 'Specific customer groups'
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

			specificCustomer:
				customerSegment === 'Specific customers'
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
			miniReq: z.boolean().default(false),

			miniPrice: miniReq
				? z.coerce.number().min(1)
				: z.optional(z.coerce.number().positive().min(1)).or(z.literal(0)),

			miniQuantity: miniReq
				? z.coerce.number().min(1)
				: z.optional(z.coerce.number().positive().min(1)).or(z.literal(0)),

			showLimit: z.boolean().default(false),

			limit: showLimit
				? z.coerce.number().min(1)
				: z.optional(z.coerce.number().positive().min(1)).or(z.literal(0)),

			date: z
				.object({
					year: z.coerce.number().positive().min(2024),
					month: z.coerce.number().positive().min(1).max(12),
					day: z.coerce.number().positive().min(1).max(31),
				})
				.nullable()
				.optional(),
			limitUser: z.boolean().default(false),
			startActivation: z.object({
				startDate: z.date({ required_error: 'Start date is required' }),
				startTime: z
					.string()
					.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid start time format' }),
			}),
			endActivation: z.object({
				endDate: z.date({ required_error: 'End date is required' }),
				endTime: z
					.string()
					.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Invalid end time format' }),
			}),
			active: z.boolean().default(false),
		};
	};

	return {
		handelDefaultValue,
		couponSchema,
	};
}
