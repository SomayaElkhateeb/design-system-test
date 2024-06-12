import { TableCell } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CustomTableBodyCheckbox from 'src/app/components/ui/form/CustomTableBodyChckbox';
import { Product } from 'src/app/interface/ProductInterface';
import { getImageUrl } from 'src/app/utils';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { CameraIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import CustomTableHeaderCheckbox from 'src/pages/CustomersPage/_comp/CustomersTables/CustomTableHeaderCheckbox';
import BaseTable, {
	GlobalTableCell,
} from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { products } from '../../AllProducts/AllProducts';

export default function InventoryTable({
	array,
	setArray,
	inventory,
	isLoading,
}: {
	array: string[];
	setArray: (e: string[]) => void;
	inventory: Product[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [isFavorite, setIsFavorite] = useState(false);

	//  headers

	const inventoryHeaders = [
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
	];

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={inventoryHeaders.map((h) => h)}
			rows={inventory?.map((e: Product, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className=' flex  items-center gap-[.4rem] '>
								<div className='flex-col-global gap-[.4rem] items-center'>
									<CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
									<button onClick={toggleFavorite}>
										{isFavorite ? (
											<StarActiveIcon className='fill-neutral-1' />
										) : (
											<StarIcon className='fill-hint' />
										)}
									</button>
								</div>
								<div className='relative'>
									<img src={getImageUrl(e.imageUrl)} loading='lazy' alt={e.name} />
									<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
								</div>

								<div className='flex-col-global gap-2'>
									<p className='title text-sm'>{e.name}</p>
									<p className='subtitle'>{e.category}</p>
									<p className='subtitle'>
										{e.option} {t('Options')}
									</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-title'>{e.SKU}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className={e.quantity === 0 ? 'text-error' : 'text-black'}>
								{e.quantity > 0 ? e.quantity : t('Out of stock')}
							</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<span className='text-primary'>SAR</span> {e.price}
						</GlobalTableCell>,

						<TableCell>
							{language === 'ar' ? (
								<IoIosArrowBack
									className='text-subtitle cursor-pointer'
									onClick={() => navigate(`/products/${e?.id}`)}
								/>
							) : (
								<IoIosArrowForward
									className='text-subtitle cursor-pointer'
									onClick={() => navigate(`/products/${e?.id}`)}
								/>
							)}
						</TableCell>,
					],
				};
			})}
		/>
	);
}
