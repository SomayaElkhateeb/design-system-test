import { useState } from 'react';
import { z } from 'zod';

export default function usePaymentValidation() {
	const [quantity, setQuantity] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvv, setCVV] = useState('');
	const [errors, setErrors] = useState(
		/**
		 * @type {{
		 *   quantity?: string;
		 *   expiryDate?: string;
		 *   cvv?: string;
		 *  }}
		 */ ({}),
	);

	const PaymentSchema = z.object({
		quantity: z
			.string()
			.min(1, { message: 'Quantity is required' })
			.regex(/^\d+$/, { message: 'Quantity must be a number' })
			.min(1, { message: 'Quantity must be greater than 0' }),
		expiryDate: z
			.string()
			.min(1, { message: 'Expiry date is required' })
			.regex(/^\d{2}\/\d{4}$/, {
				message: 'Expiry date must be in MM/YYYY format',
			}),
		cvv: z
			.string()
			.min(1, { message: 'CVV is required' })
			.regex(/^\d{3}$/, { message: 'CVV must be 3 digits' }),
	});

	const validateAll = () => {
		const data = { quantity, expiryDate, cvv };
		try {
			PaymentSchema.parse(data);
			setErrors({});
		} catch (error) {
			/** @type {Record<string | number, string>} */
			const fieldErrors = {};

			if (error instanceof z.ZodError) {
				error.errors.forEach((err) => {
					const fieldName = err.path[0];
					fieldErrors[fieldName] = err.message;
				});
				setErrors(fieldErrors);
			}
		}
	};

	/** @param {string} value */
	function handleQuantityChange(value) {
		setQuantity(value);
		validateAll();
	}

	/** @param {string} value */
	function handleExpiryDateChange(value) {
		setExpiryDate(value);
		validateAll();
	}

	/** @param {string} value */
	function handleCVVChange(value) {
		setCVV(value);
		validateAll();
	}
	return {
		quantity,
		expiryDate,
		cvv,
		errors,
		handleQuantityChange,
		handleExpiryDateChange,
		handleCVVChange,
		validateAll,
	};
}
