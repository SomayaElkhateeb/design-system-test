import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productOptionRawSchema, productOptionsAndVariationsRawSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type Values = InferredZodSchema<typeof productOptionsAndVariationsRawSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
};

export type ProductOptionValues = InferredZodSchema<typeof productOptionRawSchema>;
export type ProductOptionFormStore<TFormStore> = ValidFormStoreByValues<
	TFormStore,
	ProductOptionValues
>;
