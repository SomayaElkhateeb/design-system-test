import React, { useEffect, useState } from 'react';
import { Button, InputRow, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { customerGetsOptions } from '../../../comp/data';
import { AiOutlinePercentage } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectProducts } from 'src/app/store/slices/marketing/products/productsAsyncThunks';
import CategoryView from 'src/pages/MarketingPage/CategoryView';

const BuyXGetY: React.FC = () => {
	const { t } = useTranslation();
	const [selectedCustomerGets, setSelectedCustomerGets] = useState<string>('');
	const [amountPercentage, setAmountPercentage] = useState<number>(0);
	const [showSelectForX, setShowSelectForX] = useState<boolean>(false);
	const [showSelectForY, setShowSelectForY] = useState<boolean>(false);
	const [selectedItemX, setSelectedItemX] = useState<any[]>([]);
	const [selectedItemY, setSelectedItemY] = useState<any[]>([]);
	const dispatch = useDispatch();
	const { products } = useSelector((state: any) => state.products);

	useEffect(() => {
		dispatch(getSelectProducts());
	}, [dispatch]);

	const handleAmountPercentage = (value: number) => {
		setAmountPercentage(Math.min(Math.max(value, 0), 100));
	};

	const handleAddButtonClickForX = (selectedItemX: any[]) => {
		setSelectedItemX(selectedItemX);
		setShowSelectForX(false);
	};

	const handleAddButtonClickForY = (selectedItemY: any[]) => {
		setSelectedItemY(selectedItemY);
		setShowSelectForY(false);
	};

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				{/* select product X */}
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelectForX(true)}>
					{t('select products x')}
				</Button>

				{showSelectForX && (
					<SelectItems
						title='products X'
						onClose={() => setShowSelectForX(false)}
						select={products}
						addBtn={handleAddButtonClickForX}
					/>
				)}

				{/* item view for product X */}
				{selectedItemX?.map((item) => {
					const { title, id, img, subtitle } = item;
					return <CategoryView key={id} img={img} title={title} subtitle={subtitle} />;
				})}

				{/* customer gets */}
				<SingleChoiceChips
					options={customerGetsOptions}
					selected={selectedCustomerGets}
					setSelected={(option: string) => setSelectedCustomerGets(option)}
				/>
				{selectedCustomerGets === 'Specify percentage' && (
					<div className='w-[24rem] pt-[1rem]'>
						<InputRow
							label='Percentage'
							leftIcon={<AiOutlinePercentage />}
							type='number'
							value={amountPercentage}
							onChange={(e) => handleAmountPercentage(Number(e.target.value))}
						/>
					</div>
				)}
			</div>

			{/* select product Y */}
			<div className='w-fit'>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelectForY(true)}>
					{t('select products y')}
				</Button>
			</div>

			{showSelectForY && (
				<SelectItems
					title='products Y'
					onClose={() => setShowSelectForY(false)}
					select={products}
					addBtn={handleAddButtonClickForY}
				/>
			)}
			{/* item view for product Y */}
			{selectedItemY?.map((item) => {
				const { title, id, img, subtitle } = item;
				return <CategoryView key={id} img={img} title={title} subtitle={subtitle} />;
			})}
		</div>
	);
};

export default BuyXGetY;
