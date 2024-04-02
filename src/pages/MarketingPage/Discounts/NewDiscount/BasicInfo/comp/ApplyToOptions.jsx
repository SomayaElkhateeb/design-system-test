import { Button, InputRow, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';

import useDiscountForm from '../useDiscountForm';
import { selectCategories, selectProducts, customerGetsOptions } from './data';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
const ApplyToOptions = ({ applyTo }) => {
	const { showSelectCategories, customerGets, percentGets, quantityGets } =
		useDiscountForm();
	console.log('showSelectCategories', showSelectCategories);
	console.log('customerGets', customerGets);
	console.log('percentGets', percentGets);
	console.log('quantityGets', quantityGets);

	return (
		<div>
			{applyTo === 'All products' && (
				<h1 className='mt-[18px]'>All products</h1>
			)}
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
			{applyTo === 'Buy x get y' && <BuyxGety />}
		</div>
	);
};

export default ApplyToOptions;

// applyTo components
const SpecificCategory = () => {
	const {
		showSelectCategories,
		setShowSelectCategories,
		handleCloseSelectCategories
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select categories'
					RightIcon={FaChevronRight}
					onClick={setShowSelectCategories}
				/>
			</div>
			{showSelectCategories && (
				<SelectItems
					onClose={handleCloseSelectCategories}
					select={selectCategories}
					title='Select categories'
				/>
			)}

			{/* get data from local storage */}
		</div>
	);
};

const SpecificProducts = () => {
	const {
		showSelectCategories,
		setShowSelectCategories,
		handleCloseSelectCategories
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select products'
					RightIcon={FaChevronRight}
					onClick={setShowSelectCategories}
				/>
			</div>
			{showSelectCategories && (
				<SelectItems
					onClose={handleCloseSelectCategories}
					select={selectProducts}
					title='Select products'
				/>
			)}
		</div>
	);
};

const BuyxGety = () => {
	const {
		setCustomerGets,
		customerGets,
		percentGets,
		setPercentGets,
		quantityGets,
		setQuantityGets
	} = useDiscountForm();
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button
					variant='sec'
					text='select products X'
					RightIcon={FaChevronRight}
				/>
			</div>
			<p>Customer Gets (5 products Y with 20% offer)</p>

			<SingleChoiceChips
				options={customerGetsOptions}
				setSelected={setCustomerGets}
				selected={customerGets}
			/>
			{customerGets === 'Specific customers' && (
				<>
					<div className='w-[390px]'>
						<InputRow
							value={percentGets}
							handleOnChange={setPercentGets}
							label='Percentage'
							leftIcon={<AiOutlinePercentage />}
						/>
					</div>
					<div className='w-[390px]'>
						<InputRow
							value={quantityGets}
							handleOnChange={setQuantityGets}
							label='Quantity'
						/>
					</div>
					<div>
						<Button
							variant='sec'
							text='select products y'
							RightIcon={FaChevronRight}
						/>
					</div>
				</>
			)}
		</div>
	);
};
