import { z } from 'zod';
export interface ConditionInterface {
	attribute?: string;
	operator?: string;
	// attribute_type?: string; // price
	value?: number;
}
export interface CartRuleInterface {
	// id?: number;
	name: string;
	description: string;
	status: number;
	customer_groups: number;
	// coupon_type: number;
	// use_auto_generation: number;
	// coupon_code: string;
	// uses_per_coupon: number;
	// usage_per_customer: number;
	// starts_from: string | null;
	// ends_till: string | null;
	// sort_order: number;
	// condition_type: number;
	// conditions?: ConditionInterface[];
	// action_type: string;
	// discount_amount: number;
	// discount_quantity: number;
	// discount_step: number;
	// apply_to_shipping: number;
	// free_shipping: number;
	// end_other_rules: number;
}

const stringZod = z.string().min(1);
const numberZod = z.coerce.number().min(0).max(1);

const conditionSchema = z.object({
	attribute: stringZod,
	operator: stringZod,
	attribute_type: stringZod,
	value: z.coerce.number().min(0),
});
// z
// 	.object(
export const cartRuleSchema = {
	name: stringZod,
	description: stringZod,
	status: numberZod,
	customer_groups: z.coerce.number().min(0),
// 	coupon_type: z.coerce.number().min(0).max(1),
// 	use_auto_generation: z.coerce.number().min(0).max(1),
// 	coupon_code: z.string(),
// 	uses_per_coupon: z.coerce.number().min(0),
// 	usage_per_customer: z.coerce.number().min(0),
// 	starts_from: z.string().nullable(),
// 	ends_till: z.string().nullable(),
// 	sort_order: numberZod,
// 	condition_type: numberZod,
// 	conditions: z.array(conditionSchema).optional(),
// 	action_type: stringZod,
// 	discount_amount: z.coerce.number().min(0),
// 	discount_quantity: z.coerce.number().min(0),
// 	discount_step: z.coerce.number().min(0),
// 	apply_to_shipping: numberZod,
// 	free_shipping: numberZod,
// 	end_other_rules: numberZod,
};
// );
// .refine(
// 	(data) => {
// 		if (data.coupon_type === 0) {
// 			return true; // No coupon, no further validation needed
// 		}
// 		if (data.coupon_type === 1) {
// 			if (data.use_auto_generation === 1) {
// 				return true; //Auto-generated coupon, no code needed
// 			}
// 			return data.coupon_code.length > 0; // Manual coupon, code required
// 		}
// 		return false; //Invalid coupon_type
// 	},
// 	{
// 		message:
// 			'Coupon code is required when Specific Coupon is selected and auto-generation is off',
// 		path: ['coupon_code'],
// 	},
// );

export const defaultValues: CartRuleInterface = {
	name: '',
	description: '',
	status: 0,
	customer_groups: 0,
	// coupon_type: 0,
	// use_auto_generation: 0,
	// coupon_code: '',
	// uses_per_coupon: 0,
	// usage_per_customer: 0,
	// starts_from: null,
	// ends_till: null,
	// sort_order: 0,
	// condition_type: 0,
	// conditions: [],
	// action_type: 'by_percent',
	// discount_amount: 0,
	// discount_quantity: 0,
	// discount_step: 0,
	// apply_to_shipping: 0,
	// free_shipping: 0,
	// end_other_rules: 0,
};
