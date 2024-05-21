import { z } from 'zod';

export interface newDiscountInterface {
	name: string;
	value: number;
	sales: number;
	miniQuantity: number;
	percentage: number;
	percentageGets?: number;
	date?: {
		year: number;
		month: number;
		day: number;
	} | null;
}

export default function useCustomHookNewDiscount() {
	const handelDefaultValue = () => {
		return {
			name: '',
			value: 0,
			sales: 0,
			miniQuantity: 0,
			percentage: 0,
			percentageGets: 0,
			date: null,
		};
	};

	const discountSchema = {
		name: z.string().min(3).max(60),
		value: z.coerce.number().min(0),
		sales: z.coerce.number().min(0),
		miniQuantity: z.coerce.number().min(0),
		percentage: z.coerce.number().min(0).max(100),
		percentageGets: z.coerce.number().min(0).max(100).optional(),
		date: z
			.object({
				year: z.number().min(2024),
				month: z.number().min(1).max(12),
				day: z.number().min(1).max(31),
			})
			.nullable()
			.optional(),
	};

	return {
		handelDefaultValue,
		discountSchema,
	};
}
