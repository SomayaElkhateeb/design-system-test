import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import ThreeDotsButton from '../../Customers/ThreedotsButton';
import BaseTable from '../../Customers/TableLayoutGlobal/base.table';
import { Switch, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { nanoid } from 'nanoid';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';
import { FaRegEdit } from 'react-icons/fa';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
export default function DiscountsTable({
	discounts,
	isLoading,
}: {
	discounts: DiscountInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();
	//  headers

	const DiscountsHeaders = [
		{ title: t('Customer Name') },
		{ title: t('Discount') },
		{ title: t('Ends At') },
		{ title: t('Active?') },
		{ title: t('Sales') },
		{ title: t('actions') },
	];

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn = 'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const settingMenus = [
		{ id: nanoid(), text: 'Delete permanently', icon: <MdDelete className='text-[red] text-[1.2rem]' /> },
	];
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={DiscountsHeaders.map((h) => h)}
			rows={discounts?.map((e: DiscountInterface, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 600,
							}}
						>
							{e.name}
						</TableCell>,

						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.value}
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.date}
						</TableCell>,

						<TableCell>
							<Switch
								checked={e.active}
								// onChange={handleChange}
								inputProps={{ 'aria-label': 'controlled' }}
							/>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.sales}
						</TableCell>,

						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaRegEdit className='text-subtitle' onClick={() => navigate(`addDiscount?id=${e?.id}`)} />

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
