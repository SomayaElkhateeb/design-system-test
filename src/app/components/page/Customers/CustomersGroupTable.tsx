import { useTranslation } from 'react-i18next';
import BaseTable from './TableLayoutGlobal/base.table';
import { Checkbox, Switch, TableCell } from '@mui/material';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';
import { FaRegEdit } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import CustomTableHeaderCheckbox from './CustomTableHeaderChckbox';
import CustomTableBodyCheckbox from './CustomTableBodyChckbox';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { AnalyticsIcon, OrdersIcon } from 'src/app/utils/icons';
import { MdDelete } from 'react-icons/md';
import { nanoid } from 'nanoid';
import ThreeDotsButton from '../../optimized/Buttons/ThreedotsButton';
import { ToggleSwitch } from '../../optimized';
export default function CustomersGroupTable() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const language = UseLanguage();
	const [array, setArray] = useState<string[]>([]);
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

	const settingMenus = [
		{ id: nanoid(), text: 'Add discount', icon: <p className='text-[1.3rem]'>%</p> },
		{ id: nanoid(), text: 'Remove group', icon: <MdDelete className='text-[red] text-[1.3rem]' /> },
	];

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
			color='#55607A'
			headers={customersHeaders}
			rows={customer_groups?.map((e: CustomerGroupInterface, i: number) => {
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
							<ToggleSwitch checked={e.active}  handleToggle={()=>console.log("change")}/>
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
