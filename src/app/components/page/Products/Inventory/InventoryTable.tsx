import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import CustomTableHeaderCheckbox from '../../Customers/CustomTableHeaderChckbox';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product } from 'src/app/interface/ProductInterface';
import CustomTableBodyCheckbox from '../../Customers/CustomTableBodyChckbox';
import { CameraIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import { TableCell } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import BaseTable, { GlobalTableCell } from '../../Customers/TableLayoutGlobal/base.table';
import { getImageUrl } from 'src/app/utils';
import { useState } from 'react';

export default function InventoryTable({
	array,
	setArray,
}: {
	array: string[];
	setArray: (e: string[]) => void;
}) {
	//  hooks
	const language = UseLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [isFavorite, setIsFavorite] = useState(false);
	//  dumy data
	const products: Product[] = [
		{
			id: '1',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 10,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '2',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '3',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '4',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
		{
			id: '5',
			title: 'mohamed Mostafa',
			category: '01064545565',
			SKU: 'mansoura',
			option: 10,
			quantity: 0,
			price: 1000,
			img: getImageUrl('images/product.png'),
		},
	];

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
		{ title: '' },
	];

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}
	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={inventoryHeaders.map((h) => h)}
			rows={products?.map((e: Product, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<div className=' flex  items-center gap-[.4rem] '>
								<div className='flex flex-col gap-[.4rem] items-center'>
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
									<img src={e.img} loading='lazy' alt={e.title} />
									<CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
								</div>

								<div className='flex flex-col gap-2'>
									<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
									<p className='text-subtitle text-[.8rem]'>{e.category}</p>
									<p className='text-title text-[.8rem]'>
										{e.option} {t('Options')}
									</p>
								</div>
							</div>
						</TableCell>,
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
