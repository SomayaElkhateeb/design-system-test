import { useTranslation } from 'react-i18next';
import BaseTable, { GlobalTableCell } from './TableLayoutGlobal/base.table';
import { Checkbox, TableCell } from '@mui/material';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
import { FaRegEdit } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoIosArrowBack } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import CustomTableHeaderCheckbox from './CustomTableHeaderChckbox';
import CustomTableBodyCheckbox from './CustomTableBodyChckbox';
import ThreeDotsButton from '../../optimized/Buttons/ThreedotsButton';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import { AnalyticsIcon } from 'src/app/utils/icons';

import { Switch } from '../../ui/switch';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomersTable } from 'src/app/store/slices/customersPage/AllCustomers/customersTableAsyncThunks';

export const customers: CustomerInterface[] = [
	{
		id: '1',
		name: 'mohamed Mostafa',
		first_name: 'Mohamed',
		last_name: 'Mostafa',
		mobile: '01064545565',
		city: 'mansoura',
		Orders: 10,
		email: 'mmmm@yahoo.com',
		'E-Subscription': true,
	},
];

export interface settingMenus {
	id: string;
	text: string;
	icon: React.ReactNode;
}
export default function CustomersTable({ settingMenus }: { settingMenus: settingMenus[] }) {
	//  hooks
	const language = UseLanguage();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const [array, setArray] = useState<string[]>([]);

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	// redux
	const dispatch = useDispatch();
	const { isLoading, allCustomer, error } = useSelector((state) => state.allCustomer || {});

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
					mainArray={customers?.map((e) => e.id)}
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
			rows={allCustomer?.map((e: CustomerInterface, i: number) => {
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
						<GlobalTableCell>{e.mobile}</GlobalTableCell>,
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
								{language === 'ar' ? (
									<IoIosArrowBack
										className='text-subtitle'
										onClick={() => navigate(`/customers/${e?.id}`)}
									/>
								) : (
									<IoIosArrowForward
										className='text-subtitle'
										onClick={() => navigate(`/customers/${e?.id}`)}
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
