import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import { z } from 'zod';

export interface newDiscountInterface {
	discountName: string;
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
	customerSegment: string;
	specificCustomerGroup?: selectItemsInterface[];
	specificCustomer?: selectItemsInterface[];
	miniPrice: number;
	miniQuantity: number;
	startActivation: { startDate: Date; startTime: string };
	endActivation: { endDate: Date; endTime: string };
	active: boolean;
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
			customerSegment: 'All customers',
			specificCustomerGroup: [],
			specificCustomer: [],
			miniPrice: 0,
			miniQuantity: 0,
			startActivation: { startDate: new Date(), startTime: '00:00' },
			endActivation: { endDate: new Date(), endTime: '00:00' },
			active: false,
		};
	};

	const discountSchema = (
		discountType: string,
		applyToType: string,
		productXtoYType: string | undefined,
		customerSegment: string,
	) => {
		return {
			discountName: z.string().min(3).max(60),
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
					? z.coerce.number().positive().min(0).max(100)
					: z.optional(z.coerce.number().positive().min(0).max(100)),
			quantityGets:
				productXtoYType === 'Specify percentage'
					? z.coerce.number().positive().min(0).max(100)
					: z.optional(z.coerce.number().positive().min(0).max(100)),

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

			miniPrice: z.coerce.number().min(1),
			miniQuantity: z.coerce.number().min(1),
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

			active: z.boolean(),
		};
	};
	return {
		handelDefaultValue,
		discountSchema,
	};
}
