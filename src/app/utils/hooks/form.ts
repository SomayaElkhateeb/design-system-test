/** Hook for zod validation */
import { ZodObject, ZodRawShape, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm as useRHForm } from 'react-hook-form';

export type InferredZodSchema<TZodShape extends ZodObject<ZodRawShape> | ZodRawShape> =
	TZodShape extends ZodRawShape
		? z.infer<z.ZodObject<TZodShape>>
		: TZodShape extends ZodObject<ZodRawShape>
		? z.infer<TZodShape>
		: never;

export function useForm<TZodShape extends ZodObject<ZodRawShape> | ZodRawShape>(params: {
	schema: TZodShape;
	defaultValues: UseFormProps<InferredZodSchema<TZodShape>>['defaultValues'];
	handleSubmit: (validatedData: InferredZodSchema<TZodShape>) => void;
}) {
	const formStore = useRHForm<InferredZodSchema<TZodShape>>({
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
