import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SelectedProductsTable from './Comp/SelectedProductsTable';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import SelectProductsDialog from './Comp/SelectProductsDialog';

export interface IQuantity {
	quantity: number;
}

const quantitySchema = {
	quantity: z.coerce.number().positive().min(1),
};
const handelDefaultValue: IQuantity = {
	quantity: 0,
};
export interface ProductOption {
	type: string;
	options: string[];
}

export interface Product {
	id: string;
	name: string;
	imageUrl: string;
	category: string;
	options: ProductOption[];
	selectedOptions?: { [key: string]: string };
	quantity?: number;
	price: number;
}
export default function Products({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
	const { t } = useTranslation();
	const language = UseLanguage();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

	const handleSelectProduct = (updatedProduct: Product) => {
		setSelectedProducts((prev) => {
			const existingProductIndex = prev.findIndex((p) => p.id === updatedProduct.id);
			if (existingProductIndex !== -1) {
				return prev.filter((product) => product.id !== updatedProduct.id);
			}
			return [...prev, { ...updatedProduct, quantity: 1 }];
		});
	};
	const handleDeleteProduct = (productId: string) => {
		setSelectedProducts((prev) => prev.filter((product) => product.id !== productId));
	};
	const handleQuantityChange = (productId: string, quantity: number) => {
		setSelectedProducts((prev) =>
			prev.map((product) => (product.id === productId ? { ...product, quantity } : product)),
		);
	};

	const handleSubmit = (values: IQuantity) => {
		console.log(values);
		onNext();
	};

	const { formStore, onSubmit } = useForm({
		schema: quantitySchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue,
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5 flex-col-global'>
				<Button
					variant='secondary'
					text={t('select products')}
					RightIcon={language === 'ar' ? FaChevronLeft : FaChevronRight}
					onClick={() => setDialogOpen(true)}
					className='w-fit'
				/>
				<SelectedProductsTable
					formStore={formStore}
					products={selectedProducts}
					onDelete={handleDeleteProduct}
					onQuantityChange={handleQuantityChange}
				/>
				<div className='flex-btn-end'>
					<Button variant='tertiary' text={t('back')} onClick={onBack} />
					<Button variant='primary' text={t('Next')} onClick={onSubmit} />
				</div>
				<SelectProductsDialog
					onClose={() => setDialogOpen(false)}
					open={dialogOpen}
					selectedProducts={selectedProducts}
					onSelectProduct={handleSelectProduct}
				/>
			</form>
		</Form>
	);
}
