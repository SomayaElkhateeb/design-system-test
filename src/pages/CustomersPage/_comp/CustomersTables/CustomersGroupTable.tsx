import { TableCell } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { Switch } from 'src/app/components/ui/switch';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';
import { getCustomersGroupTable } from 'src/app/store/slices/customersPage/CustomersGroup/customersGroupTableAsyncThunks';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import BaseTable from '../../../../app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from './CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from './CustomTableHeaderCheckbox';
import { settingMenus } from './CustomersTable';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';

export default function CustomersGroupTable({ settingMenus }: { settingMenus: settingMenus[] }) {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const language = UseLanguage();
	const [array, setArray] = useState<string[]>([]);

	// redux
	const dispatch = useAppDispatch();
	const { customersGroup, isLoading, error } = useAppSelector((state) => state.customersGroup);

	useEffect(() => {
		dispatch(getCustomersGroupTable());
	}, [dispatch]);

	//  rows
	const customer_groups: CustomerGroupInterface[] = [
		{
			id: '1',
			name: 'group1',
			customerNumber: 45,
			describtion: 'high group',
			active: true,
		},
		{
			id: '2',
			name: 'group1',
			customerNumber: 45,
			describtion: 'high group',
			active: true,
		},
	];

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	//  headers
	const customersHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={customer_groups?.map((e) => e.id)}
				/>
			),
			title: t('Group Name'),
		},
		{ title: t('Customers No.') },
		{ title: t('Active?') },
		{ title: t('Actions') },
	];

	const actionsButtonStyleAr = 'justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]';
	const actionsButtonStyleEn =
		'justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]';

	return (
		<BaseTable
			isLoading={isLoading}
			color='#55607A'
			headers={customersHeaders}
			rows={customersGroup?.map((e: CustomerGroupInterface, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<div className=' flex  items-center gap-[.2rem]'>
								<CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
								<div className='flex flex-col gap-2'>
									<p>{e.name}</p>
									<p className='text-subtitle text-[.8rem]'>{e.describtion}</p>
								</div>
							</div>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.customerNumber}
						</TableCell>,

						<TableCell>
							<Switch checked={e.active} />
						</TableCell>,
						<TableCell>
							<div className={language === 'ar' ? actionsButtonStyleAr : actionsButtonStyleEn}>
								<FaRegEdit
									className='text-subtitle'
									onClick={() => navigate(`/addCustomer?id=${e?.id}`)}
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
