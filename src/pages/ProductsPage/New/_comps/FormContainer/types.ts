import { productTypeMap } from 'src/app/components/optimized/Forms/Product/config';
import { ValidFormStoreByValues } from 'src/utils/types';

export interface Props<TFormStore> {
	sections: { id: string; title: string }[];
	children: React.ReactNode;
	formStore: ValidFormStoreByValues<TFormStore, { productType: keyof typeof productTypeMap }>;
	onSubmit: (data: any) => void;
}
