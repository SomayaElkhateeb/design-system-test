import { InferredZodSchema } from './../../../../../utils/hooks/form';
import { z } from 'zod';
import { ProductFormStore } from '../types';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export const basicInfoSchema = {
	nameEn: z.string().min(3).max(50),
	nameAr: z.string().min(3).max(50),
	sku: z.preprocess((arg) => (!arg ? undefined : arg), z.string().min(3).max(50).optional()),
	brand: z.preprocess(
		(arg) => (!arg ? undefined : arg),
		z
			.object({
				id: z.string(),
				name: z.string().min(3).max(50),
			})
			.optional(),
	),
	category: z.preprocess(
		(arg) => (!arg ? undefined : arg),
		z
			.object({
				id: z.string(),
				name: z.string().min(3).max(50),
			})
			.optional(),
	),
};

type BasicInfoValues = InferredZodSchema<typeof basicInfoSchema>;

type ValidFormStoreByValues<TFormStore, DesiredValues> = TFormStore extends UseFormReturn<
	infer TValues extends FieldValues
>
	? TValues extends DesiredValues
		? TFormStore
		: never
	: never;

type Test = ValidFormStoreByValues<ProductFormStore, BasicInfoValues>;

const test = {} as Test;

test;
