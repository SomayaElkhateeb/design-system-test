import { z } from 'zod';
export interface addCheckOutInterface {
	purchase: string;
	branch?: string;
	// ////////////
	payment: string;
	creditCard?: string;
	bankTransfer?: string;
	// //////////////////
	creditCardOption?: string;
	creditCardNote?: string;
	// ////////////////
	delivery: string;
	shipping?: string;
	fixedRate: string;
	// ///////////
	shippingMethod: string;
	aramex?: string;
	dhlStatus?: string;
	dhlNote?: string;

	aramexStatus?: string;
	aramexNote?: string;
}

export default function useCustomAddCheckOutForm(
	purchase: string,
	payment: string,
	delivery: string,
	shipping: string,
	shippingMethod: string,
) {
	const handelDefaultValue = () => {
		return {
			purchase: 'branch',
			branch: '',

			// //////////////

			payment: 'cash',
			creditCard: '',
			bankTransfer: '',

			// //////////////////
			creditCardOption: '',
			creditCardNote: '',
			delivery: 'Pickup',
			shipping: 'Free shipping',
			fixedRate: '',
			shippingMethod: 'DHL (main)',
			aramex: '',
			dhlStatus: '',
			dhlNote: '',

			aramexStatus: '',
			aramexNote: '',
		};
	};

	const addCheckOutSchema = () => {
		const stringValidation = z.string().min(3);

		const branchValidation = {
			branch:
				purchase === 'branch' ? stringValidation : z.optional(stringValidation).or(z.literal('')),
		};

		const creditValidation = {
			creditCard:
				payment === 'creditCard'
					? stringValidation
					: z.optional(stringValidation).or(z.literal('')),

			bankTransfer:
				payment === 'bankTransfer'
					? stringValidation
					: z.optional(stringValidation).or(z.literal('')),
		};

		const shippingValidation = {
			shipping:
				delivery === 'shipping' ? stringValidation : z.optional(stringValidation).or(z.literal('')),
		};

		const shippingRateValidation = {
			fixedRate:
				shipping === 'fixedRate'
					? stringValidation
					: z.optional(stringValidation).or(z.literal('')),
		};

		const shippingMethodValidation = {
			aramex:
				shippingMethod === 'aramex'
					? stringValidation
					: z.optional(stringValidation).or(z.literal('')),
		};

		return {
			purchase: stringValidation,
			...branchValidation,
			payment: stringValidation,
			...creditValidation,
			creditCardOption: z.optional(stringValidation).or(z.literal('')),
			creditCardNote: z.optional(stringValidation).or(z.literal('')),
			delivery: stringValidation,
			...shippingValidation,
			shipping: z.optional(stringValidation).or(z.literal('')),
			...shippingRateValidation,
			shippingMethod: stringValidation,
			...shippingMethodValidation,
			dhlStatus: stringValidation,
			dhlNote: stringValidation,
			aramexStatus: z.optional(stringValidation).or(z.literal('')),
			aramexNote: z.optional(stringValidation).or(z.literal('')),
		};
	};

	return {
		handelDefaultValue,
		addCheckOutSchema,
	};
}
