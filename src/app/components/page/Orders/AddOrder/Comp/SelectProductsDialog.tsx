import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'src/app/components/ui/input';
import { Button, CheckBox } from 'src/app/components/optimized';
import { GlobalDialog } from 'src/app/components/shared';

import productsData from './productsData.json';
import { getImageUrl } from 'src/app/utils';
import { DownIcon } from 'src/app/utils/icons';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { Product } from '../Products';

interface SelectProductsDialogProps {
	onClose: () => void;
	open: boolean;
	selectedProducts: Product[];
	onSelectProduct: (product: Product) => void;
}
export default function SelectProductsDialog({
	onClose,
	open,
	selectedProducts,
	onSelectProduct,
}: SelectProductsDialogProps) {
	const { t } = useTranslation();

	const [products, setProducts] = useState<Product[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		// Simulate fetching data from API
		setProducts(productsData);
	}, []);

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleAddClick = () => {
		const formattedProducts = selectedProducts.map(({ options, ...rest }) => rest);
		console.log(formattedProducts);
		onClose();
	};

	return (
		<GlobalDialog
			openDialog={open}
			handleClose={onClose}
			style={{ width: { md: '50%', xs: '80%' } }}
		>
			<div className='flex flex-col gap-4'>
				<h2 className='text-title font-semibold'>{t('Select Products')}</h2>
				<Input
					value={searchTerm}
					placeholder={t('Search')}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<div className='divide-y'>
					{filteredProducts.map((product) => (
						<ProductAccordion
							key={product.id}
							product={product}
							onSelect={onSelectProduct}
							isSelected={!!selectedProducts.find((p) => p.id === product.id)}
						/>
					))}
				</div>
				<div className='flex items-center justify-end gap-4 '>
					<Button variant='tertiary' text={t('Cancel')} onClick={() => onClose()} />
					<Button
						variant='primary'
						text={`${t('Add')} (${selectedProducts.length})`}
						onClick={handleAddClick}
						className='w-fit'
					/>
				</div>
			</div>
		</GlobalDialog>
	);
}

interface ProductAccordionProps {
	product: Product;
	onSelect: (product: Product) => void;
	isSelected: boolean;
}
function ProductAccordion({ product, onSelect, isSelected }: ProductAccordionProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
	useEffect(() => {
		// Set the initial selected options to the first available option for each type
		const initialOptions: { [key: string]: string } = {};
		product.options.forEach((option) => {
			if (option.options.length > 0) {
				initialOptions[option.type] = option.options[0];
			}
		});
		setSelectedOptions(initialOptions);
	}, [product.options]);

	const handleOptionChange = (type: string, option: string) => {
		setSelectedOptions((prev) => ({
			...prev,
			[type]: option,
		}));
		if (isSelected) {
			onSelect({ ...product, selectedOptions: { ...selectedOptions, [type]: option } });
		}
	};

	const handleSelectProduct = (checked: boolean) => {
		if (checked) {
			onSelect({ ...product, selectedOptions });
		} else {
			onSelect(product);
		}
	};

	return (
		<div className={`grid gap-3 py-3 px-5 ${isOpen ? 'bg-sec-light' : ''} `}>
			<div className='flex justify-between items-center '>
				<div className='flex gap-2 items-center'>
					<CheckBox checked={isSelected} handleOnChange={handleSelectProduct} />
					<div className='size-11 rounded-md overflow-hidden flex-shrink-0'>
						<img
							src={getImageUrl(product.imageUrl)}
							alt={product.name}
							className='size-full object-cover'
						/>
					</div>
					<div className='grid place-content-between'>
						<h2 className='title text-sm'>{product.name}</h2>
						<p className='paragraph text-subtitle'>{product.category}</p>
					</div>
				</div>
				<button onClick={() => setIsOpen(!isOpen)}>
					<DownIcon className={`fill-pri-dark transition-all ${isOpen ? '-rotate-180 ' : ''}`} />
				</button>
			</div>
			{isOpen && (
				<div className='grid gap-2 px-5'>
					{product.options.map((option) => (
						<div key={option.type} className='mb-2'>
							<p className='title text-sm'>{option.type}</p>
							<SingleChoiceChips
								options={option.options}
								setSelected={(selectedOption) => handleOptionChange(option.type, selectedOption)}
								selected={selectedOptions[option.type] || ''}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
