import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import ThreeDotsButton from '../../../optimized/Buttons/ThreedotsButton';
import BaseTable, { GlobalTableCell } from '../../Customers/TableLayoutGlobal/base.table';
import { Switch, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { nanoid } from 'nanoid';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';
import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { deleteDiscount } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import { ToggleSwitch } from 'src/app/components/optimized';

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
	const dispatch = useDispatch();
	// const [showPopup, setShowPopup] = useState(false);
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
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	const settingMenus = [
		{
			id: nanoid(),
			text: 'Delete permanently',
			icon: <MdDelete className='text-[red] text-[1.2rem]' />,
		},
	];

	const deleteItem = (id) => {
		// dispatch(deleteDiscount(id));
		// setShowPopup(false);
	};
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
								<ToggleSwitch checked={e.active} handleToggle={() => console.log('change')} />
							</TableCell>,
							<GlobalTableCell>{e.sales}</GlobalTableCell>,

							<TableCell>
								<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
									<FaRegEdit
										className='text-subtitle'
										onClick={() => navigate(`addDiscount?id=${e?.id}`)}
									/>

									<ThreeDotsButton
										sortMenus={settingMenus}
										selectedOption={selectedOption}
										handelSelect={handleSelect}
										// onClick={() => dispatch(deleteDiscount(e?.id))}
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
							// 	<button onClick={() => deleteItem(e?.id)}>delete</button>
							// </TableCell>,
						],
					};
				})}
			/>

			{/* {
				showPopup && (
					<PopupDelete onClose={() => setShowPopup(false)} onDelete={() => deleteItem(e?.id)} />
				);
					} */}
		</>
	);
}
