import { TableCell } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { Switch } from 'src/app/components/ui/switch';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
import { getAllCustomersTable } from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import BaseTable, {
	GlobalTableCell,
} from '../../../../app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from './CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from './CustomTableHeaderCheckbox';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';

export interface settingMenus {
	id: string;
	text: string;
	icon: React.ReactNode;
}
export default function CustomersTable({ settingMenus }: { settingMenus: settingMenus[] }) {
	//  hooks
	const { language } = useLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [array, setArray] = useState<string[]>([]);

	//  custom hook for select setting item
	const { selectedOption, handleSelect } = useSelectBox();

	// redux
	const dispatch = useAppDispatch();
	const { allCustomers, isLoading, error } = useAppSelector((state) => state.allCustomer);

	useEffect(() => {
		dispatch(getAllCustomersTable());
	}, [dispatch]);


	//  headers
	const customersHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={allCustomers?.map((e) => e.id)}
				/>
			),
			title: t('Customer Name'),
		},
		{ title: t('Mobile') },
		{ title: t('City') },
		{ title: t('Orders') },
		{ title: t('E-Subscription') },
		{ title: t('actions') },
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={customersHeaders.map((h) => h)}
			rows={allCustomers?.map((e: CustomerInterface, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className=' flex  items-center gap-[.2rem]'>
								<CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
								<div className='flex flex-col gap-2'>
									<p>{e.name}</p>
									<p className='text-subtitle text-[.8rem]'>{e.email}</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>{e.phone}</GlobalTableCell>,
						<GlobalTableCell>{e.city}</GlobalTableCell>,
						<GlobalTableCell>{e.Orders}</GlobalTableCell>,

						<TableCell>
							<Switch checked={e['E-Subscription']} />
						</TableCell>,
						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`addCustomer?id=${e?.id}`)}
								/>
								<ThreeDotsButton
									sortMenus={settingMenus}
									selectedOption={selectedOption}
									handelSelect={handleSelect}
								/>
								<ArrowTables path={`/customers/${e?.id}`} />
							</div>
						</TableCell>,
					],
				};
			})}
		/>
	);
}
