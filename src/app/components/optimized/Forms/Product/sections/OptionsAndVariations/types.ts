import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productOptionsAndVariationsSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type Values = InferredZodSchema<typeof productOptionsAndVariationsSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
};
