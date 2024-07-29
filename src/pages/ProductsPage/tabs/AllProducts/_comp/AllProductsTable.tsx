import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { CameraIcon, CopyIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import { Product } from 'src/pages/ProductsPage/_comp/data';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import CustomTableHeaderCheckbox from 'src/app/components/optimized/UiKits/CustomTableHeaderCheckbox';
import CustomTableBodyCheckbox from 'src/app/components/optimized/UiKits/CustomTableBodyCheckbox';

interface AllProductsTableProps {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;

	isLoading: boolean;
	setOpenDialog: (e: boolean) => void;
	setEdit_product: (e: Product) => void;
	children: React.ReactNode;
	handelId: (e: string) => void;
}

export const actionsButtonStyle = () => {
	const { language } = useLanguage();
	let classData = '';
	language === 'ar'
		? (classData = 'justify-end flex items-center gap-4 cursor-pointer text-[1.2rem]')
		: (classData = 'justify-start flex items-center gap-4 cursor-pointer text-[1.2rem]');

	return classData;
};
export default function AllProductsTable({
	products,
	array,
	setArray,

	isLoading,
	setOpenDialog,
	setEdit_product,
	children,
	handelId,
}: AllProductsTableProps) {
	// hooks
	const { language } = useLanguage();
	
	const { t } = useTranslation();
	const [favorites, setFavorites] = useState<string[]>([]);
	const classData = actionsButtonStyle();
	const toggleFavorite = (id: string) => {
		setFavorites((prevFavorites) =>
			prevFavorites.includes(id)
				? prevFavorites.filter((favId) => favId !== id)
				: [...prevFavorites, id],
		);
	};

	// headers
	const productsHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={products?.map((e) => e.id)}
				/>
			),
			title: t('Product & Category'),
		},
		{ title: t('SKU') },
		{ title: t('QTY') },
		{ title: t('Price') },
		{ title: t('actions') },
	];

	const handelEdit = (e: Product) => {
		if (e.type === 'simple') {
			setOpenDialog(true);
			setEdit_product(e);
		}
	};

	//  table rows
	const rows = products?.map((product) => {
		const isFavorite = favorites.includes(product.id);
		return {
			item: product,
			elements: [
				<GlobalTableCell key={`product-${product.id}`}>
					<div className='flex items-center gap-[.4rem]'>
						<div className='flex-col-global gap-[.4rem] items-center'>
							<CustomTableBodyCheckbox array={array} setArray={setArray} id={product.id} />
							<button onClick={() => toggleFavorite(product.id)}>
								{isFavorite ? (
									<StarActiveIcon className='fill-neutral-1' />
								) : (
									<StarIcon className='fill-hint' />
								)}
							</button>
						</div>
						{product?.images?.length > 0 && product?.images[0]?.original_image_url && (
							<div className='relative box-photo w-[4.18rem] h-[4.18rem]'>
								<img
									src={product?.images[0]?.original_image_url}
									className='w-full h-full'
									loading='lazy'
									alt={product.en.name}
								/>
								<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
							</div>
						)}

						<div className='flex-col-top-section-pages gap-2'>
							<p className='title text-sm'>
								{language === 'ar' ? product.ar.name : product.en.name}
							</p>
							{product.category && <p className='subtitle'>{product.category}</p>}
							{product.option && (
								<p className='subtitle'>
									{product.option} {t('Options')}
								</p>
							)}
						</div>
					</div>
				</GlobalTableCell>,
				<GlobalTableCell key={`sku-${product.id}`}>
					<p className='text-title'>{product.sku}</p>
				</GlobalTableCell>,
				<GlobalTableCell key={`qty-${product.id}`}>
					<p className={product.qty === 0 ? 'text-error' : 'text-black'}>
						{product.qty > 0 ? product.qty : t('Out of stock')}
					</p>
				</GlobalTableCell>,
				<GlobalTableCell key={`price-${product.id}`}>
					<span className='text-primary'>SAR</span> {product.price}
				</GlobalTableCell>,
				<GlobalTableCell key={`actions-${product.id}`}>
					<div className={classData}>
						<IoEyeOutline className='text-subtitle' />
						<FaRegEdit className='text-subtitle' onClick={() => handelEdit(product)} />
						<CopyIcon className='fill-subtitle' />
						<div onClick={() => handelId(product?.id)}>{children}</div>

						<ArrowTables path={`/products/${product.id}`} />
					</div>
				</GlobalTableCell>,
			],
		};
	});

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={productsHeaders}
			rows={rows}
		/>
	);
}
