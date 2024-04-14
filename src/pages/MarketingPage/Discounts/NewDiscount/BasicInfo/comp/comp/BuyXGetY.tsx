import { FaAngleRight } from 'react-icons/fa6';
import React, { useState } from 'react';
import { Button, InputRow } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { customerGetsOptions } from '../../../comp/data';
import { AiOutlinePercentage } from 'react-icons/ai';
const BuyXGetY: React.FC = () => {
	const [selectedCustomerGets, setSelectedCustomerGets] = useState<string>('');
	const [amountPercentage, setAmountPercentage] = useState<string>('');

	const handleAmountPercentage = (value) => {
		setAmountPercentage({ amountPercentage: Math.min(Math.max(value, 0), 100) });
	};

	return (
		<>
			<div className='pt-[18px]'>
				{/* select product x */}
				<Button variant='secondary' RightIcon={FaAngleRight}>
					select products x
				</Button>

				{/* item view */}
				<div className='py-[18px]'>
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
								value={amountPercentage} // Use amountPercentage from state
								onChange={(e) => handleAmountPercentage(Number(e.target.value))}
							/>
						</div>
					)}
				</div>
				{/* select product Y */}
				<Button variant='secondary' RightIcon={FaAngleRight}>
					select products y
				</Button>

				{/* item view */}
				<div className='py-[18px]'></div>
			</div>
		</>
	);
};

export default BuyXGetY;
