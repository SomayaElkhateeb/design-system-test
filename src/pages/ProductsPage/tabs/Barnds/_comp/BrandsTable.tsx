import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { BrandsInterface } from 'src/app/interface/BrandInterface';
import { getImageUrl } from 'src/app/utils';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import BaseTable, {
	GlobalTableCell,
} from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Switch } from 'src/app/components/ui/switch';
import { settingMenus } from 'src/pages/CustomersPage/_comp/CustomersTables/CustomersTable';

//  dumy data
export const brands: BrandsInterface[] = [
	{
		id: '1',
		title: 'mohamed Mostafa',
		describtion: '01064545565',
		available: false,
		productsNo: 10,
		img: 'images/product.png',
	},
];
export default function BrandsTable({
	settingMenus,
	brands,
	isLoading,
}: {
	settingMenus: settingMenus[];
	brands: BrandsInterface[];
	isLoading: boolean;
}) {
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

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	// //////////////////////
	// /////////////////////

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={brandssHeaders.map((h) => h)}
			rows={brands?.map((e: BrandsInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className='flex items-center gap-[.4rem] '>
								<img src={getImageUrl(e.img)} loading='lazy' alt={e.title} />

								<div className='flex-col-top-section-pages gap-2'>
									<p className='title'>{e.title}</p>
									<p className='subtitle'>{e.describtion}</p>
								</div>
							</div>
						</GlobalTableCell>,

						<GlobalTableCell>{e.productsNo}</GlobalTableCell>,

						<TableCell>
							<Switch checked={e.available} />
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
