import { TableCell } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { Product } from 'src/app/interface/ProductInterface';
import { getImageUrl } from 'src/app/utils';
import { CameraIcon, CopyIcon, StarActiveIcon, StarIcon } from 'src/app/utils/icons';
import CustomTableHeaderCheckbox from 'src/pages/CustomersPage/_comp/CustomersTables/CustomTableHeaderCheckbox';
import BaseTable, {
	GlobalTableCell,
} from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { menuType } from 'src/app/components/optimized/Buttons/ActionsComp';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import CustomTableBodyCheckbox from 'src/app/components/ui/form/CustomTableBodyChckbox';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';

export default function AllProductsTable({
	products,
	array,
	setArray,
	settingMenus,
	isLoading,
}: {
	products: Product[];
	array: string[];
	setArray: (e: string[]) => void;
	settingMenus: menuType[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [isFavorite, setIsFavorite] = useState(false);

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	function toggleFavorite() {
		setIsFavorite(!isFavorite);
	}

	//  headers

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

	const actionsButtonStyleAr = 'justify-end flex items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn = 'justify-start flex items-center gap-4 cursor-pointer text-[1.2rem]';
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={productsHeaders.map((h) => h)}
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
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<IoEyeOutline className='text-subtitle' />
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`/addProduct?id=${e?.id}`)}
								/>

								<CopyIcon className='fill-subtitle' />

								<ThreeDotsButton
									sortMenus={settingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
								{language === 'ar' ? (
									<IoIosArrowBack
										className='text-subtitle'
										onClick={() => navigate(`/products/${e?.id}`)}
									/>
								) : (
									<IoIosArrowForward
										className='text-subtitle'
										onClick={() => navigate(`/products/${e?.id}`)}
									/>
								)}
							</div>
						</TableCell>,
					],
				};
			})}
		/>
	);
}
