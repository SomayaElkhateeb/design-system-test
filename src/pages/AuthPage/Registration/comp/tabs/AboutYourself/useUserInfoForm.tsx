import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { useEffect } from 'react';

interface UserInfoInterface {
	email: string;
	name: string;
	phone: string;
	password: string;
}

const handleDefaultValue = (): UserInfoInterface => {
	return {
		email: '',
		name: '',
		phone: '',
		password: '',
	};
};

const userInfoValidationSchema = {
	email: z.string().email('Invalid email address'),
	name: z.string().min(1, 'Name is required'),
	phone: z.string().min(10, 'Phone number is too short'),
	password: z.string().min(8, 'Password must be at least 8 characters'),
};

export interface UserInfoProps {
	onNext: () => void;
	onPhoneChange: (phone: string) => void;
}

export function useUserInfoForm({ onNext, onPhoneChange }: UserInfoProps) {
	const handleSubmit = (values: UserInfoInterface) => {
		console.log(values);
		//Perform verification before moving to the next step
		onNext();
	};
	const { formStore, onSubmit } = useForm({
		schema: userInfoValidationSchema,
		handleSubmit: handleSubmit,
		defaultValues: handleDefaultValue(),
	});
	useEffect(() => {
		const subscription = formStore.watch((value) => {
			const phoneValue = value.phone ?? '';
			onPhoneChange(phoneValue);
		});
		return () => subscription.unsubscribe();
	}, [formStore, onPhoneChange]);

	return { formStore, onSubmit };
}
