import { InputRow } from 'src/app/components/optimized';
import { AiOutlinePercentage } from 'react-icons/ai';
import useDiscountForm from '../useDiscountForm';
const DiscountTypesOptions = ({ discountType }) => {
	const { percentage, setPercentage, fixedAmount, setFixedAmount } =
		useDiscountForm();

	console.log('percentage', percentage);
	console.log('fixedAmount', fixedAmount);
	return (
		<div>
			{discountType === 'Percentage' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						label='Discount'
						leftIcon={<AiOutlinePercentage />}
						id='percentage'
						value={percentage}
						handleOnChange={setPercentage}
					/>
				</div>
			)}
			{discountType === 'Fixed amount' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						label='Discount'
						id='fixedAmount'
						value={fixedAmount}
						handleOnChange={setFixedAmount}
					/>
				</div>
			)}
			{discountType === 'Free shipping' && (
				<h1 className='mt-[18px]'>Free shipping</h1>
			)}
		</div>
	);
};

export default DiscountTypesOptions;
