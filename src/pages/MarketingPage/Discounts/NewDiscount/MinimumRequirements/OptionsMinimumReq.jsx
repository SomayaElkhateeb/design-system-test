import { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import useDiscountForm from '../comp/useDiscountForm';

const OptionsMinimumReq = ({ optionType }) => {
	const { minimumPrice, setMinimumPrice, minimumQuantity, setMinimumQuantity } =
		useDiscountForm();

	console.log('minimumPrice', minimumPrice);
	console.log('minimumQuantity', minimumQuantity);
	return (
		<>
			{optionType === 'Minimum price' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						value={minimumPrice}
						handleOnChange={setMinimumPrice}
						label='Mini purchase price'
					/>
				</div>
			)}
			{optionType === 'Minimum quantity' && (
				<div className='w-[390px] mt-[18px]'>
					<InputRow
						value={minimumQuantity}
						handleOnChange={setMinimumQuantity}
						label='Mini purchase quantity'
					/>
				</div>
			)}
		</>
	);
};

export default OptionsMinimumReq;
