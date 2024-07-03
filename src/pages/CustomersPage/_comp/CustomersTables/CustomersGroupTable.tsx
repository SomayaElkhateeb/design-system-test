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
import BaseTable, {
	GlobalTableCell,
} from '../../../../app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from './CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from './CustomTableHeaderCheckbox';
import { settingMenus } from './CustomersTable';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import ArrowTables from 'src/app/components/optimized/UiKits/ArrowTables';
import useLanguage from 'src/app/utils/hooks/useLanguage';

export default function CustomersGroupTable({ settingMenus }: { settingMenus: settingMenus[] }) {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { language } = useLanguage();
	const [array, setArray] = useState<number[]>([]);

	// redux
	const dispatch = useAppDispatch();
	const { customersGroup, isLoading, error } = useAppSelector((state) => state.customersGroup);

	useEffect(() => {
		dispatch(getCustomersGroupTable());
	}, [dispatch]);

	

	//  custom hook for select setting item

	const { selectedOption, handleSelect } = useSelectBox();

	//  headers
	const customersHeaders = [
		{
			icon: (
				<CustomTableHeaderCheckbox
					array={array}
					setArray={setArray}
					mainArray={customersGroup?.map((e) => e.id)}
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
						<GlobalTableCell>
							<div className=' flex-row-global gap-[.2rem]'>
								<CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
								<div className='flex-col-global gap-2'>
									<p>{e.name}</p>
									<p className='text-subtitle text-[.8rem]'>{e.describtion}</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>{e.customers_count}</GlobalTableCell>,

						<GlobalTableCell>
							<Switch checked={e.active} />
						</GlobalTableCell>,
						<GlobalTableCell>
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
								<ArrowTables path={`/customers`} />
							</div>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
}
