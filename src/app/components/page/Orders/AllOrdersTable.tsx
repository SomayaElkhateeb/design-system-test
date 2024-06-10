import { useNavigate } from 'react-router-dom';
import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { OrderInterface } from 'src/app/interface/OrderInterface';
import CustomTableBodyCheckbox from 'src/pages/CustomersPage/_comp/CustomersTables/CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from 'src/pages/CustomersPage/_comp/CustomersTables/CustomTableHeaderCheckbox';
import BaseTable, {
	GlobalTableCell,
} from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { menuType } from '../../optimized/Buttons/ActionsComp';
import ThreeDotsButton from '../../optimized/Buttons/ThreedotsButton';
// react-icons
import { CiLocationOn } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function AllOrdersTable({
	orders,
	array,
	setArray,
	settingMenus,
}: {
	orders: OrderInterface[];
	array: string[];
	setArray: (e: string[]) => void;
	settingMenus: menuType[];
}) {
	//  hooks
	const language = UseLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();

	//  custom hook for select setting item
	const { selectedOption, handleSelect } = useSelectBox();

	//  headers
	const OrdersHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={orders?.map((e) => e.id)}
				/>
			),
			title: t('No. & Date'),
		},
		{ title: t('billing') },
		{ title: t('Delivery') },
		{ title: t('Payment') },
		{ title: t('Status') },
		{ title: t('Total') },

		{ title: t('actions') },
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={OrdersHeaders.map((h) => h)}
			rows={orders?.map((e: OrderInterface, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell>
							<div className=' flex  items-center gap-[.3rem] '>
								<CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />

								<div className='flex flex-col gap-[.3rem]'>
									<p className='text-title text-[.9rem] font-semibold'>{e.id}</p>
									<p className='text-subtitle text-[.8rem]'>{e.date}</p>
								</div>
							</div>
						</TableCell>,
						<TableCell>
							<div className=' flex flex-col gap-[.4rem]'>
								<p className='text-title'>{e.customer_name}</p>
								<p className='text-subtitle text-[.8rem] flex-row-global-items-start gap-[.2rem]'>
									<CiLocationOn className='text-subtitle text-[.9rem]' /> {e.location}
								</p>
							</div>
						</TableCell>,
						<TableCell>
							<div className=' flex flex-col gap-[.4rem]'>
								<p className='text-title'>{e.delivery_status}</p>
								<p className='text-subtitle text-[.8rem]'>{e.branch_name}</p>
							</div>
						</TableCell>,
						<TableCell>
							<div className=' flex flex-col gap-[.4rem]'>
								<p className='text-title'>{e.payment_name}</p>
								<p className='text-subtitle text-[.8rem]'>{e.payment_status}</p>
							</div>
						</TableCell>,
						<GlobalTableCell>{e.order_status}</GlobalTableCell>,
						<GlobalTableCell>SAR {e.total}</GlobalTableCell>,
						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaArrowsRotate className='text-subtitle' />
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`/addProduct?id=${e?.id}`)}
								/>

								<ThreeDotsButton
									sortMenus={settingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
								{language === 'ar' ? (
									<IoIosArrowBack
										className='text-subtitle'
										onClick={() => navigate(`/orders/orderDetails/11111`)}
									/>
								) : (
									<IoIosArrowForward
										className='text-subtitle'
										onClick={() => navigate(`/orders/orderDetails/11111`)}
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
