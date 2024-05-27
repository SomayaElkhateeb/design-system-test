/** Hook for zod validation */
import { ZodObject, ZodRawShape, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm as useRHForm } from 'react-hook-form';

export type InferredZodSchema<T extends ZodObject<ZodRawShape> | ZodRawShape> =
	T extends ZodRawShape
		? z.infer<z.ZodObject<T>>
		: T extends ZodObject<ZodRawShape>
		? z.infer<T>
		: never;

export function useForm<TZodRawShape extends ZodObject<ZodRawShape> | ZodRawShape>(params: {
	schema: TZodRawShape;
	defaultValues: UseFormProps<InferredZodSchema<TZodRawShape>>['defaultValues'];
	handleSubmit: (validatedData: InferredZodSchema<TZodRawShape>) => void;
}) {
	const formStore = useRHForm<InferredZodSchema<TZodRawShape>>({
		resolver: zodResolver(
			// @ts-ignore
			'shape' in params.schema ? params.schema : z.object(params.schema),
		),
		defaultValues: params.defaultValues,
		mode: 'onChange',
	});

	return {
		formStore,
		onSubmit: formStore.handleSubmit(params.handleSubmit),
	};
}
