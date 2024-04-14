import React from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { Button } from 'src/app/components/optimized';
import { FaCirclePlus } from 'react-icons/fa6';
import { TikTokPaymentProps } from '../tikTokTypes';


const TikTokPayment: React.FC<TikTokPaymentProps> = ({ data }) => {
	return (
		<>
			<div className='flex justify-between items-center border-b py-4'>
				<p>{data.description}</p>
				<span>
					<MdErrorOutline color='#EC5151' size={36} />
				</span>
			</div>
			<div className='py-6 flex justify-between items-center'>
				<p>
					Has the payment method been set? <span className=''>Just refresh</span>
				</p>
				<Button LeftIcon={<FaCirclePlus size={20} color='' />} variant='secondary'>
					Add Payment Method
				</Button>
			</div>

			<div className='mt-5'>
				<p>
					Go to <span className='text-blue-500'>TikTok Ads Manager</span> and manage your payment method or view more
					payment details.
				</p>
			</div>
		</>
	);
};

export default TikTokPayment;
