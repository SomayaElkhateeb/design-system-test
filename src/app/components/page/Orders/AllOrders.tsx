import useResponsive from 'src/app/utils/hooks/useResponsive';

import AllOrdersTableMobile from './AllOrdersTableMobile';
import AddButtonMobile from '../../optimized/Buttons/AddButtonMobile';
import AllOrdersTable from './AllOrdersTable';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { OrderInterface } from 'src/app/interface/OrderInterface';
import TopSectionOrdersPage from './TopSectionOrdersPage';
import { nanoid } from 'nanoid';
import { LiaTrashAlt } from 'react-icons/lia';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getAllOrdersPageTable } from 'src/app/store/slices/ordersPage/allOrders/allOrdersAsyncThunks';

//  setting menus for setting button action
const settingMenus = [
	{ id: nanoid(), text: 'Cancel Order', icon: <LiaTrashAlt size='28' className='fill-error' /> },
];

export default function AllOrders() {
	//  hooks
	const { t } = useTranslation();
	const [array, setArray] = useState<string[]>([]);
	const { xs } = useResponsive();
	//redux
	const dispatch = useAppDispatch();
	const { allOrders, isLoading, error } = useAppSelector((state) => state.allOrders);

	useEffect(() => {
		dispatch(getAllOrdersPageTable());
	}, [dispatch]);

	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionOrdersPage addButton={t('Add Order')} path='/addOrder' />

				{/*  table section */}

				<AllOrdersTable
					settingMenus={settingMenus}
					array={array}
					setArray={setArray}
					orders={allOrders}
					isLoading={isLoading}
				/>

				{xs && (
					<div className='flex-col-global'>
						<AllOrdersTableMobile orders={allOrders} />
						<AddButtonMobile path='/order/addOrder' />
					</div>
				)}
			</div>
		</div>
	);
}
