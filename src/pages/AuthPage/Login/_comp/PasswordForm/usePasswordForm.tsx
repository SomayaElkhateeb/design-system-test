import { useCallback, useState } from 'react';
import { z } from 'zod';

import { useForm } from 'src/app/utils/hooks/form';
import toast from 'react-hot-toast';
import { AuthApi } from 'src/app/React-Query/authApi';
import { useMutation } from 'react-query';
import PublicHandelingErrors from 'src/app/utils/AxiosUtils/PublicHandelingErrors';

const passwordSchema = {
	password: z.string().min(8, 'Password must be at least 8 characters long'),
};

export default function usePasswordForm() {
	const [isVisible, setIsVisible] = useState(false);

	const { mutate } = useMutation('login', AuthApi.login, {
		onSuccess: async (response) => {
			console.log(response?.data);
			toast.success(response?.data?.message);
			// set to local storage
			// localStorage.setItem('token_login', response?.data?.data?.token);
			// localStorage.setItem('domain_login', response?.data?.data?.data?.company?.domain);
		},
		onError: PublicHandelingErrors.onErrorResponse,
	});

	const handleSubmit = (values: { password: string }) => {
		mutate(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: passwordSchema,
		handleSubmit: handleSubmit,
		defaultValues: { password: '' },
	});
	///////////////////////////////////
	// const { formStore, onSubmit } = useForm({
	// 	schema: passwordSchema,
	// 	handleSubmit: (values: { password: string }) => console.log(values),
	// 	defaultValues: { password: '' },
	// });
	const toggleVisibility = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, []);
	return { formStore, onSubmit, toggleVisibility, isVisible };
}
