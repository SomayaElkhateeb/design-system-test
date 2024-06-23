import { useMemo } from 'react';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

const emailSchema = z
	.string()
	.min(1, { message: 'Email is required' })
	.email('Invalid email address');
const phoneSchema = z.string().min(7, { message: 'Phone is required' });

export default function useForgotPasswordForm({
	usePhone,
	setIsCodeSent,
}: {
	usePhone: boolean;
	setIsCodeSent: (isCodeSent: boolean) => void;
}) {
	const getTexts = (usePhone: boolean) => ({
		btnText: `Use your ${usePhone ? 'email' : 'phone'}`,
		switchText: `No access to your ${usePhone ? 'phone' : 'email'}?`,
		placeholder: usePhone ? 'Phone Number' : 'Email Address',
	});
	const schema = useMemo(() => ({ contact: usePhone ? phoneSchema : emailSchema }), [usePhone]);

	const { formStore, onSubmit } = useForm({
		schema,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
			setIsCodeSent(true);
		},
		defaultValues: { contact: '' },
	});

	return { formStore, onSubmit, getTexts };
}
