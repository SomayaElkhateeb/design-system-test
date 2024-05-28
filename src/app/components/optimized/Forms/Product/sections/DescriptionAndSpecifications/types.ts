import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productDescriptionAndSpecificationsSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';

export type Values = InferredZodSchema<typeof productDescriptionAndSpecificationsSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
};
