import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

enum InputType {
	Email = 'email',
	Phone = 'phone',
}
export interface IdentifierFormProps {
	setStep: (step: number) => void;
	onIdentifierChange: (Identifier: string) => void;
	setEmail: (e: string) => void;
}
const schemas = {
	email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
	phone: z.string().min(7, { message: 'Phone is required' }),
};

const getSchema = (inputType: InputType) => ({
	emailOrPhone: schemas[inputType],
});

export default function useIdentifierForm({
	setStep,
	onIdentifierChange,
	setEmail,
}: IdentifierFormProps) {
	const [inputType, setInputType] = useState<InputType>(InputType.Email);
	console.log(schemas[inputType]);
	const { formStore, onSubmit } = useForm({
		schema: getSchema(inputType),
		handleSubmit: (values: { emailOrPhone: string }) => {
			setStep(2);
			setEmail(values.emailOrPhone);
		},
		defaultValues: { emailOrPhone: '' },
	});

	const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.trim();
		let newType: InputType = /^\d+$/.test(value) ? InputType.Phone : InputType.Email;
		console.log(value);
		console.log(newType);
		setInputType(newType);
	};

	useEffect(() => {
		const subscription = formStore.watch((value) => {
			const emailOrPhoneValue = value.emailOrPhone ?? '';
			onIdentifierChange(emailOrPhoneValue);
		});
		return () => subscription.unsubscribe();
	}, [formStore.watch('emailOrPhone'), onIdentifierChange]);

	return { formStore, onSubmit, handleTypeChange };
}
