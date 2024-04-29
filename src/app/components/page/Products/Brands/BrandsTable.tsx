import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { BrandsInterface } from 'src/app/interface/BrandInterface';

import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from '../../../optimized/Buttons/ThreedotsButton';
import BaseTable, { GlobalTableCell } from '../../Customers/TableLayoutGlobal/base.table';
import { Switch, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { IoIosArrowForward } from 'react-icons/io';

import { IoIosArrowBack } from 'react-icons/io';

import { settingMenus } from 'src/pages/ProductsPage/AllProducts';
import { ToggleSwitch } from 'src/app/components/optimized';
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
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={brandssHeaders.map((h) => h)}
			rows={brands?.map((e: BrandsInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className=' flex  items-center gap-[.4rem] '>
								<img src={e.img} loading='lazy' alt={e.title} />

								<div className='flex flex-col gap-2'>
									<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
									<p className='text-subtitle text-[.8rem]'>{e.describtion}</p>
								</div>
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>{e.productsNo}</GlobalTableCell>,

						<TableCell>
							<ToggleSwitch checked={e.available} handleToggle={() => console.log('change')} />
						</TableCell>,

						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<ThreeDotsButton
									sortMenus={settingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
								{language === 'ar' ? (
									<IoIosArrowBack
										className='text-subtitle'
										onClick={() => navigate(`/brands/${e?.id}`)}
									/>
								) : (
									<IoIosArrowForward
										className='text-subtitle'
										onClick={() => navigate(`/brands/${e?.id}`)}
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
