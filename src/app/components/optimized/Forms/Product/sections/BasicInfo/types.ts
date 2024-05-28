import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productBasicInfoSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type ProductBasicInfoValues = InferredZodSchema<typeof productBasicInfoSchema>;

export type ProductBasicInfoProps<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, ProductBasicInfoValues>;
};
