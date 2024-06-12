import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { TableCell } from '@mui/material';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { Switch } from 'src/app/components/ui/switch';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';
import { deleteDiscount } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { MoreIcon, RemoveIcon } from 'src/app/utils/icons';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';

export default function DiscountsTable({
	discounts,
	isLoading,
}: {
	discounts: DiscountInterface[];
	isLoading: boolean;
}) {
	//  hooks
	const language = UseLanguage();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [state, setState] = useState({
		showDeletePopup: false,
		deletingItemId: '',
	});

	const { showDeletePopup, deletingItemId } = state;
	//  headers

	const DiscountsHeaders = [
		{ title: t('Customer Name') },
		{ title: t('Discount') },
		{ title: t('Ends At') },
		{ title: t('Active?') },
		{ title: t('Sales') },
		{ title: t('actions') },
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const handleDeleteItem = (id: string) => {
		console.log('Deleting item:', id);
		dispatch(deleteDiscount(id));
		setState({ ...state, showDeletePopup: false });
	};

	const handleUpdateItem = (id: string) => {
		// 	console.log(' item:', id);
		// 	navigate(`addDiscount?id=${id}`);
		// 	dispatch(updateDiscounts(id));
	};

	const options = [
		{
			id: nanoid(),
			text: 'delete',
			icon: <RemoveIcon className='fill-error' />,
		},
	];

	return (
		<>
			<BaseTable
				isLoading={isLoading}
				language={language}
				color='#55607A'
				headers={DiscountsHeaders.map((h) => h)}
				rows={discounts?.map((e: DiscountInterface, i: number) => {
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

							<TableCell>
								<Switch checked={e.active} />
							</TableCell>,
							<GlobalTableCell>{e.sales}</GlobalTableCell>,

							<TableCell>
								<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
									<FaRegEdit className='text-subtitle' onClick={() => handleUpdateItem(e?.id)} />

									<MenuOptions
										btn={<MoreIcon className='fill-subtitle' />}
										options={options}
										handle={() =>
											setState({ ...state, showDeletePopup: true, deletingItemId: e?.id })
										}
									/>

									{showDeletePopup && deletingItemId === e?.id && (
										<PopupDelete
											onClose={() => setState({ ...state, showDeletePopup: false })}
											onDelete={() => handleDeleteItem(e?.id)}
										/>
									)}

									{language === 'ar' ? (
										<IoIosArrowBack
											className='text-subtitle'
											onClick={() => navigate(`addDiscount?id=${e?.id}`)}
										/>
									) : (
										<IoIosArrowForward
											className='text-subtitle'
											onClick={() => navigate(`addDiscount?id=${e?.id}`)}
										/>
									)}
								</div>
							</TableCell>,
						],
					};
				})}
			/>
		</>
	);
}
