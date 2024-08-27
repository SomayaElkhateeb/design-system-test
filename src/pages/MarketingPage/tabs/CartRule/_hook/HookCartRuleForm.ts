import dayjs, { Dayjs } from 'dayjs';
import { z } from 'zod';
export interface ConditionInterface {
	attribute?: string; // cart|base_sub_total
	operator?: string; // ==|!=|>=|<=|>|<
	// attribute_type?: string; // price
	value?: number;
}
export interface CartRuleInterface {
	id?: number;
	name: string;
	description: string;
	status: number; // 0 | 1
	customer_groups: number; // []
	coupon_type: number; // 0| 1
	use_auto_generation: number; // 0 | 1
	coupon_code: string;
	uses_per_coupon: number; // ??
	usage_per_customer: number;
	starts_from: Dayjs | null;
	ends_till: Dayjs | null;
	sort_order: number; // 0 | 1
	condition_type: number; // 0 | 1
	conditions?: ConditionInterface[];
	action_type: string; // by_percent|by_fixed|cart_fixed|buy_x_get_y
	discount_amount: number;
	discount_quantity: number;
	discount_step: number;
	apply_to_shipping: number; // 0 | 1
	free_shipping: number; // 0 | 1
	end_other_rules: number; // 0 | 1
}

const stringZod = z.string().min(1);
const numberZod = z.coerce.number().min(0).max(1);

const conditionSchema = z.object({
	attribute: stringZod,
	operator: stringZod,
	// attribute_type: stringZod,
	value: z.coerce.number().min(0),
});
export const cartRuleSchema = {
	name: stringZod,
	description: stringZod,
	status: numberZod,
	customer_groups: z.coerce.number().min(0),
	coupon_type: z.coerce.number().min(0),
	use_auto_generation: numberZod,
	coupon_code: stringZod,
	uses_per_coupon: z.coerce.number().min(0),
	usage_per_customer: z.coerce.number().min(0),
	starts_from: z
		.custom<Dayjs>((val) => val instanceof dayjs, { message: 'Invalid date' })
		.nullable(),
	ends_till: z.custom<Dayjs>((val) => val instanceof dayjs, { message: 'Invalid date' }).nullable(),

	sort_order: numberZod,
	condition_type: numberZod,
	conditions: z.array(conditionSchema).optional(),
	action_type: stringZod,
	discount_amount: z.coerce.number().min(0),
	discount_quantity: z.coerce.number().min(0),
	discount_step: z.coerce.number().min(0),
	apply_to_shipping: numberZod,
	free_shipping: numberZod,
	end_other_rules: numberZod,
};

export const defaultValues: CartRuleInterface = {
	name: '',
	description: '',
	status: 0,
	customer_groups: 0,
	coupon_type: 0,
	use_auto_generation: 0,
	coupon_code: '',
	uses_per_coupon: 0,
	usage_per_customer: 0,
	starts_from: null,
	ends_till: null,
	sort_order: 0,
	condition_type: 0,
	conditions: [
		{
			attribute: 'cart',
			operator: '>=',
			// attribute_type: 'price',
			value: 0,
		},
	],
	action_type: 'by_percent',
	discount_amount: 0,
	discount_quantity: 0,
	discount_step: 0,
	apply_to_shipping: 0,
	free_shipping: 0,
	end_other_rules: 0,
};
