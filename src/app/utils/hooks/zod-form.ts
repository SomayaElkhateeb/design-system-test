/** Hook for zod validation */
import { ZodRawShape, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm } from 'react-hook-form';

type InferredZodSchema<T extends ZodRawShape> = T extends ZodRawShape ? z.infer<z.ZodObject<T>> : never;

export function useZodForm<TZodRawShape extends ZodRawShape>(params: {
	schema: TZodRawShape;
	defaultValues: NonNullable<UseFormProps<InferredZodSchema<TZodRawShape>>['defaultValues']>;
	handleSubmit: (validatedData: InferredZodSchema<TZodRawShape>) => void;
}) {
	const {
		watch,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		getValues,
	} = useForm<InferredZodSchema<TZodRawShape>>({
		resolver: zodResolver(z.object(params.schema)),
		defaultValues: params.defaultValues,
		mode: 'onChange',
	});

	return {
		watch,
		reset,
		setValue,
		getValues,
		errors,
		control,
		onSubmit: handleSubmit(params.handleSubmit),
	};
}
