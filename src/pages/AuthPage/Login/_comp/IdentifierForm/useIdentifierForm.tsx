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
}
const schemas = {
	email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
	phone: z.string().min(7, { message: 'Phone is required' }),
};

const getSchema = (inputType: InputType) => ({
	emailOrPhone: schemas[inputType],
});

export default function useIdentifierForm({ setStep, onIdentifierChange }: IdentifierFormProps) {
	const [inputType, setInputType] = useState<InputType>(InputType.Email);
	const { formStore, onSubmit } = useForm({
		schema: getSchema(inputType),
		handleSubmit: (values: { emailOrPhone: string }) => {
			console.log('Form Submitted:', values);
			setStep(2);
		},
		defaultValues: { emailOrPhone: '' },
	});

	const handleTypeChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value.trim();
			let newType: InputType = /^\d+$/.test(value) ? InputType.Phone : InputType.Email;
			setInputType(newType);
			// formStore.setValue('emailOrPhone', value);
		},
		[formStore],
	);

	useEffect(() => {
		const subscription = formStore.watch((value) => {
			const emailOrPhoneValue = value.emailOrPhone ?? '';
			onIdentifierChange(emailOrPhoneValue);
		});
		return () => subscription.unsubscribe();
	}, [formStore, onIdentifierChange]);

	return { formStore, onSubmit, handleTypeChange };
}
