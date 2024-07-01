import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';

import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from 'src/app/components/ui/form/CustomTableBodyChckbox';
import { getImageUrl } from 'src/app/utils';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { CameraIcon, CopyIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import CustomTableHeaderCheckbox from 'src/pages/CustomersPage/_comp/CustomersTables/CustomTableHeaderCheckbox';
import { Product } from 'src/pages/ProductsPage/_comp/data';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';

interface AllProductsTableProps {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;
	settingMenus: menuType[];
	isLoading: boolean;
}

export default function AllProductsTable({
	products,
	array,
	setArray,
	settingMenus,
	isLoading,
}: AllProductsTableProps) {
	// hooks
	const { language } = useLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [favorites, setFavorites] = useState<string[]>([]);

	// custom hook for select setting item
	const { selectedOption, handleSelect } = useSelectBox();

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
					mainArray={products.map((e) => e.id)}
				/>
			),
			title: t('Product & Category'),
		},
		{ title: t('SKU') },
		{ title: t('QTY') },
		{ title: t('Price') },
		{ title: t('actions') },
	];

	const actionsButtonStyle = (isArabic: boolean) =>
		isArabic
			? 'justify-end flex items-center gap-4 cursor-pointer text-[1.2rem]'
			: 'justify-start flex items-center gap-4 cursor-pointer text-[1.2rem]';

	//  table rows
	const rows = products.map((product) => {
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
						<div className='relative'>
							<img src={getImageUrl(product.imageUrl)} loading='lazy' alt={product.name} />
							<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
						</div>

						<div className='flex-col-top-section-pages gap-2'>
							<p className='title text-sm'>{product.name}</p>
							<p className='subtitle'>{product.category}</p>
							<p className='subtitle'>
								{product.option} {t('Options')}
							</p>
						</div>
					</div>
				</GlobalTableCell>,
				<GlobalTableCell key={`sku-${product.id}`}>
					<p className='text-title'>{product.SKU}</p>
				</GlobalTableCell>,
				<GlobalTableCell key={`qty-${product.id}`}>
					<p className={product.quantity === 0 ? 'text-error' : 'text-black'}>
						{product.quantity > 0 ? product.quantity : t('Out of stock')}
					</p>
				</GlobalTableCell>,
				<GlobalTableCell key={`price-${product.id}`}>
					<span className='text-primary'>SAR</span> {product.price}
				</GlobalTableCell>,
				<GlobalTableCell key={`actions-${product.id}`}>
					<div className={actionsButtonStyle(language === 'ar')}>
						<IoEyeOutline className='text-subtitle' />
						<FaRegEdit
							className='text-subtitle'
							onClick={() => navigate(`/addProduct?id=${product.id}`)}
						/>
						<CopyIcon className='fill-subtitle' />
						<ThreeDotsButton
							sortMenus={settingMenus}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
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
