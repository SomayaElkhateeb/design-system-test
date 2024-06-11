import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import BaseTable, {
	GlobalTableCell,
} from '../../../../pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { Coupon } from 'src/app/interface/CouponInterface';

import { nanoid } from 'nanoid';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Switch } from '../../ui/switch';
import MenuOptions from '../../optimized/Menu/MenuOptions';
import { MoreIcon, RemoveIcon } from 'src/app/utils/icons';
import PopupDelete from '../../optimized/Popups/PopupDelete';
import { useState } from 'react';
import { deleteCoupons } from 'src/app/store/slices/marketing/coupons/couponsAsyncThunks';

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
	const [state, setState] = useState({
		showDeletePopup: false,
		deletingItemId: '',
	});
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

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const handleDeleteItem = (id: string) => {
		// console.log('Deleting item:', id);
		dispatch(deleteCoupons(id));
		setState({ ...state, showDeletePopup: false });
	};

	const options = [
		{
			id: nanoid(),
			text: 'delete',
			icon: <RemoveIcon className='fill-error' />,
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
							<Switch checked={e.active} />
						</GlobalTableCell>,
						<GlobalTableCell>{e.sales}</GlobalTableCell>,
						<GlobalTableCell>{e.used}</GlobalTableCell>,

						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`addCoupon?id=${e?.id}`)}
								/>

								<MenuOptions
									btn={<MoreIcon className='fill-subtitle' />}
									options={options}
									handle={() =>
										setState({ ...state, showDeletePopup: true, deletingItemId: e?.id })
									}
								/>

								{state.showDeletePopup && state.deletingItemId === e?.id && (
									<PopupDelete
										onClose={() => setState({ ...state, showDeletePopup: false })}
										onDelete={() => handleDeleteItem(e?.id)}
									/>
								)}

								{language === 'ar' ? (
									<IoIosArrowBack
										className='text-subtitle'
										onClick={() => navigate(`addCoupon?id=${e?.id}`)}
									/>
								) : (
									<IoIosArrowForward
										className='text-subtitle'
										onClick={() => navigate(`addCoupon?id=${e?.id}`)}
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
