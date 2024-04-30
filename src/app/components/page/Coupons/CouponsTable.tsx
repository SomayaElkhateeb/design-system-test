import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Switch, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import BaseTable, { GlobalTableCell } from '../Customers/TableLayoutGlobal/base.table';
import ThreeDotsButton from '../../optimized/Buttons/ThreedotsButton';
import { Coupon } from 'src/app/interface/CouponInterface';
import { MdDelete } from 'react-icons/md';
import { nanoid } from 'nanoid';
import { FaRegEdit } from 'react-icons/fa';

import useSelectBox from '../../optimized/Menu/useSelectBox';
import { useDispatch } from 'react-redux';
import { deleteCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';
import { ToggleSwitch } from '../../optimized';

export default function CouponsTable({
	coupons,
	isLoading,
}: {
	coupons: Coupon[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//  headers

	const CouponsHeaders = [
		{ title: t('Customer Name') },
		{ title: t('Discount') },
		{ title: t('Ends At') },
		{ title: t('Active?') },
		{ title: t('Sales') },
		{ title: t('Used') },
		{ title: t('actions') },
	];

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const settingMenus = [
		{
			id: nanoid(),
			text: 'Delete permanently',
			icon: <MdDelete className='text-[red] text-[1.2rem]' />,
		},
	];
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={CouponsHeaders.map((h) => h)}
			rows={coupons?.map((e: Coupon, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell
							sx={{
								fontWeight: 600,
							}}
						>
							{e.name}
						</GlobalTableCell>,

						<GlobalTableCell>{e.value}</GlobalTableCell>,
						<GlobalTableCell>{e.date}</GlobalTableCell>,

						<GlobalTableCell>
							<ToggleSwitch checked={e.active} handleToggle={() => console.log('change')} />
						</GlobalTableCell>,
						<GlobalTableCell>{e.sales}</GlobalTableCell>,
						<GlobalTableCell>{e.used}</GlobalTableCell>,

						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`addCoupon?id=${e?.id}`)}
								/>

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
						// <TableCell>
						// 	<button onClick={() => dispatch(deleteCoupons(e?.id))}>delete</button>
						// </TableCell>,
					],
				};
			})}
		/>
	);
}
