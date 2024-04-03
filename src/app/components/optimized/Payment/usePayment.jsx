import { useState } from 'react';

const usePayment = () => {
	// State
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(/** @type {string | null} */ (null));
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [errors, setErrors] = useState(
		/**
		 * @type {{
		 *   quantity?: string;
		 *   expiryDate?: string;
		 *   cvv?: string;
		 *  }}
		 */ ({}),
	);

	const [paymentData, setPaymentData] = useState({
		quantity: '',
		expiryDate: '',
		cvv: '',
	});

	/**
	 * @param {string} fieldName
	 * @param {string} enteredValue
	 */
	function paymentDataHandler(fieldName, enteredValue) {
		setPaymentData((prevPaymentData) => ({
			...prevPaymentData,
			[fieldName]: enteredValue,
		}));
	}

	/**
	 * @description - Select Payment Method
	 * @param {string} method - Payment Method
	 */
	function handlePaymentMethodChange(method) {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
		setPaymentData({ quantity: '', expiryDate: '', cvv: '' });
	}
	// Agree to the terms to affect the confirmation button
	const handleTermsCheckbox = () => {
		setAgreeToTerms(!agreeToTerms);
	};

	const isButtonDisabled = !agreeToTerms || !selectedPaymentMethod;
	return {
		errors,
		paymentData,
		agreeToTerms,
		isButtonDisabled,
		selectedPaymentMethod,
		paymentDataHandler,
		handleTermsCheckbox,
		handlePaymentMethodChange,
	};
};

export default usePayment;
