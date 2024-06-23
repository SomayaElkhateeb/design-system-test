import { useCallback, useState } from 'react';
import { z } from 'zod';

import { useForm } from 'src/app/utils/hooks/form';

const passwordSchema = {
	password: z.string().min(8, 'Password must be at least 8 characters long'),
};

export default function usePasswordForm() {
	const [isVisible, setIsVisible] = useState(false);

	const { formStore, onSubmit } = useForm({
		schema: passwordSchema,
		handleSubmit: (values: { password: string }) => console.log(values),
		defaultValues: { password: '' },
	});
	const toggleVisibility = useCallback(() => {
		setIsVisible((prev) => !prev);
	}, []);
	return { formStore, onSubmit, toggleVisibility, isVisible };
}
