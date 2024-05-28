import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { ValidFormStoreByValues } from 'src/utils/types';
import { productCategorySchema } from './utils';

type ProductCategoryValues = InferredZodSchema<typeof productCategorySchema>;

export type ProductFormCategoryFieldProps<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, ProductCategoryValues>;
};
