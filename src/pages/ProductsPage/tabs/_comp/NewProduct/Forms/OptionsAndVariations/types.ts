import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { productOptionRawSchema, productVariantSchema } from './utils';
import { ValidFormStoreByValues } from 'src/utils/types';
import { AttributeInterface } from 'src/app/interface/AttributeInterface';

export type Values = InferredZodSchema<typeof productVariantSchema>;

export type Props<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
	attributeValue?:AttributeInterface[]
};
export type PropsAttributes<TFormStore> = {
	formStore: ValidFormStoreByValues<TFormStore, Values>;
	id?: string;
	attributeValue?:AttributeInterface[]
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
