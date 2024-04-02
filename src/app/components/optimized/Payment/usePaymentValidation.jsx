import { useState } from "react";
import { z } from 'zod';

const usePaymentValidation = () => {
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [errors, setErrors] = useState({});

  const PaymentSchema = z.object({
    quantity: z
      .string()
      .nonempty({ message: "Quantity is required" })
      .regex(/^\d+$/, { message: "Quantity must be a number" })
      .min(1, { message: "Quantity must be greater than 0" }),
    expiryDate: z
      .string()
      .nonempty({ message: "Expiry date is required" })
      .regex(/^\d{2}\/\d{4}$/, {
        message: "Expiry date must be in MM/YYYY format",
      }),
    cvv: z
      .string()
      .nonempty({ message: "CVV is required" })
      .regex(/^\d{3}$/, { message: "CVV must be 3 digits" }),
  });

  const validateAll = () => {
    const data = { quantity, expiryDate, cvv };
    try {
      PaymentSchema.parse(data);
      setErrors({});
    } catch (error) {
      const fieldErrors = {};
      error.errors.forEach((err) => {
        const fieldName = err.path[0];
        fieldErrors[fieldName] = err.message;
      });
      setErrors(fieldErrors);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    validateAll();
  };

  const handleExpiryDateChange = (value) => {
    setExpiryDate(value);
    validateAll();
  };

  const handleCVVChange = (value) => {
    setCVV(value);
    validateAll();
  };
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
};

export default usePaymentValidation;
