import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { BrandsInterface } from 'src/app/interface/BrandInterface';

import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from '../../Customers/ThreedotsButton';
import BaseTable from '../../Customers/TableLayoutGlobal/base.table';
import { Switch, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { IoIosArrowForward } from 'react-icons/io';

import { IoIosArrowBack } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { CopyIcon, OrdersIcon } from 'src/app/utils/icons';
import { MdDelete } from 'react-icons/md';
import { FiUploadCloud } from 'react-icons/fi';
export default function BrandsTable() {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();
	//  headers

	const brandssHeaders = [
		{ title: t('Name & Description') },
		{ title: t('Products No.') },
		{ title: t('Availability') },
		{ title: t('actions') },
	];

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	//  dumy data
	const brands: BrandsInterface[] = [
		{
			id: '1',
			title: 'mohamed Mostafa',
			describtion: '01064545565',
			available: false,
			productsNo: 10,

			img: getImageUrl('images/product.png'),
		},
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn = 'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const settingMenus = [
		{ id: nanoid(), text: 'Copy product link', icon: <CopyIcon className='fill-subtitle' /> },
		{ id: nanoid(), text: 'Product report', icon: <CopyIcon /> },
		{ id: nanoid(), text: 'Product orders', icon: <OrdersIcon /> },
		{ id: nanoid(), text: 'Export product orders XLS', icon: <FiUploadCloud className='text-[red]' /> },
		{ id: nanoid(), text: 'Delete product', icon: <MdDelete className='text-[red]' /> },
	];
	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={brandssHeaders.map((h) => h)}
			rows={brands?.map((e: BrandsInterface, i: number) => {
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
								<img src={e.img} loading='lazy' alt={e.title} />

								<div className='flex flex-col gap-2'>
									<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
									<p className='text-subtitle text-[.8rem]'>{e.describtion}</p>
								</div>
							</div>
						</TableCell>,

						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.productsNo}
						</TableCell>,

						<TableCell>
							<Switch
								checked={e.available}
								// onChange={handleChange}
								inputProps={{ 'aria-label': 'controlled' }}
							/>
						</TableCell>,

						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<ThreeDotsButton sortMenus={settingMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
								{language === 'ar' ? (
									<IoIosArrowBack className='text-subtitle' onClick={() => navigate(`/brands/${e?.id}`)} />
								) : (
									<IoIosArrowForward className='text-subtitle' onClick={() => navigate(`/brands/${e?.id}`)} />
								)}
							</div>
						</TableCell>,
					],
				};
			})}
		/>
	);
}
