import { IoIosAddCircle } from 'react-icons/io';
import { Button } from '../../optimized';
import ActionsComp from '../Customers/ActionsComp';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

export default function TopSectionDiscountAndCoupons({ addButton, path }: { addButton: string; path: string }) {
	//  hooks
	const navigate = useNavigate();
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
        { id: nanoid(), text: 'Sales ( High to Low )' },
		{ id: nanoid(), text: 'Sales ( Low to  High )' },
	];

	return (
		<div className='flex-row-global justify-between'>
			{/*  left dropdow */}

			<Button onClick={() => navigate(path)} variant='primary' LeftIcon={IoIosAddCircle}>
				{addButton}
			</Button>

			{/*  actions  arrange,... */}
			<div className='flex-row-global  gap-[1.2rem]'>
				<ActionsComp
					sortMenus={sortMenus}
					filterMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
		</div>
	);
}