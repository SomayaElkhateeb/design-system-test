import type { FieldValues, UseFormReturn } from 'react-hook-form';

export type ValidFormStoreByValues<
	TFormStore,
	DesiredValues extends FieldValues,
> = TFormStore extends UseFormReturn<infer TValues extends FieldValues>
	? TValues extends DesiredValues
		? TFormStore
		: UseFormReturn<DesiredValues>
	: UseFormReturn<DesiredValues>;

// export type ValidValuesToFormStore<
// 	TValues,
// 	DesiredValues extends FieldValues,
// > = TValues extends DesiredValues ? UseFormReturn<TValues> : UseFormReturn<DesiredValues>;
