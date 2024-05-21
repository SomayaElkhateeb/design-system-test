import { z } from 'zod';
import { newDiscountInterface } from '../../Discounts/NewDiscount/HookForNewDiscount';
export interface newCouponInterface extends newDiscountInterface {
	usage: number;
}

export default function useCustomHookAddCoupon() {
	const handelDefaultValue = () => {
		return {
			name: '',
			percentage: 0,
			value: 0,
			sales: 0,
			miniQuantity: 0,
			usage: 0,
			endDate: null,
		};
	};

	const couponSchema = {
		name: z.string().min(3).max(60),
		percentage: z.coerce.number().min(0).max(100),
		value: z.coerce.number().min(0),
		sales: z.coerce.number().min(0),
		miniQuantity: z.coerce.number().min(0),
		usage: z.coerce.number().min(0),
		endDate: z.date().nullable().optional(),
	};

	return {
		handelDefaultValue,
		couponSchema,
	};
}
