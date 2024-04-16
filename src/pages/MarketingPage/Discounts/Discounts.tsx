import React, { useEffect, useState } from 'react';
import { ArrangeIcon, FilterIcon } from 'src/app/utils/icons';
import { IoIosAddCircle } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { Body, BodyTable, Header, HeaderTable, Table } from 'src/app/components/page';
import { headerData } from './NewDiscount/comp/data';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscounts } from 'src/app/store/slices/marketing/discounts/discountsAsyncThunks';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton';
import LinearDeterminate from 'src/app/components/optimized/UiKits/LinearDeterminate';
import FilterButton from 'src/app/components/page/Customers/FilterButton';
import { useTranslation } from 'react-i18next';

const Discounts: React.FC = () => {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, discount } = useSelector((state) => state.discount);

	useEffect(() => {
		dispatch(getDiscounts());
	}, [dispatch]);

	console.log('discount', discount);

	const handleMoreClick = () => {
		console.log('more click');
	};

	const sortMenus = [
		{ id: '1', text: 'Name A to Z' },
		{ id: '2', text: 'Name Z to A' },
		// Add more sorting options as needed
	];

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};

	return (
		<>
			<div className='h-[70px] flex items-center border-b-2 border-light-2 mx-3'>
				<div className='flex justify-between items-center w-full'>
					<Button
						LeftIcon={IoIosAddCircle}
						onClick={() => {
							navigate('addDiscount');
						}}
					>
						{t('add new discount')}
					</Button>

					<div className='flex gap-8'>
						<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
						<FilterButton />
					</div>
				</div>
			</div>

			{/* Table */}
			{isLoading ? (
				<LinearDeterminate />
			) : discount.length > 0 ? (
				<div className='mx-3'>
					<Table>
						<HeaderTable>
							<Header headerData={headerData} />
						</HeaderTable>
						<BodyTable>
							<Body bodyData={discount} onClick={handleMoreClick} />
						</BodyTable>
					</Table>
				</div>
			) : (
				<div className='py-2 px-6 my-20 mx-auto w-fit bg-white rounded'>
					<h3 className='text-title font-semibold'>{t('There is no discount available!')}</h3>
				</div>
			)}

			{/* Render error message if error exists */}
			{/* {error && toast.error(error)} */}
		</>
	);
};

export default Discounts;
