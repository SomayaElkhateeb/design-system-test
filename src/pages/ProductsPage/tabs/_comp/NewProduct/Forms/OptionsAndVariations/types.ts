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

// new
// export type ProductOptionFormStore = {
// 	control: any;
// 	getValues: (name: string) => any;
// 	setValue: (name: string, value: any) => void;
// 	submit: () => void;
// };

// export type ProductOptionValues = {
// 	tempId: string;
// 	nameEn: string;
// 	value: string;
// };

// export type Props = {
// 	formStore: ProductOptionFormStore;
// };

export type ProductVariation = {
	sku: string;
	price: number;
	stock: number;
	[key: string]: string | number;
};
