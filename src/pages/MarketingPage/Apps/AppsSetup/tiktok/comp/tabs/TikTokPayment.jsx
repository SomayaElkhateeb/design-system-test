import { MdErrorOutline } from 'react-icons/md';
import { Button } from 'src/app/components/optimized';
import { FaCirclePlus } from 'react-icons/fa6';

const TikTokPayment = ({ data }) => {
	return (
		<>
			<div className='flex justify-between items-center border-b py-4'>
				<p>{data.description}</p>
				<span>
					<MdErrorOutline color='#EC5151' size={36} />
				</span>
			</div>
			<div className='py-6'>
				<p>
					Has the payment method been set? <span className=''>Just refresh</span>
				</p>
				<Button LeftIcon={<FaCirclePlus size={36} color='' />} variant='secondary'>
					Add Payment Method
				</Button>
			</div>
		</>
	);
};

export default TikTokPayment;
