import { useState } from 'react';

const usePayment = () => {
	// State
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
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

	const paymentDataHandler = (fieldName, enteredValue) => {
		setPaymentData((prevPaymentData) => ({
			...prevPaymentData,
			[fieldName]: enteredValue,
		}));
	};

	// Select Payment Method
	const handlePaymentMethodChange = (method) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
		setPaymentData({ quantity: '', expiryDate: '', cvv: '' });
	};
	// Agree to the terms to affect the confirmation button
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
