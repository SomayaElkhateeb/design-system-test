import OptionsCustomers from './comp/OptionsCustomers';
import useDiscountForm from '../comp/useDiscountForm';
import { customerSegmentOptions } from '../comp/data';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

const CustomerSegment = () => {
	const { setCustomerSegment, customerSegment } = useDiscountForm();
	console.log('customerSegment', customerSegment);
	return (
		<section className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>Customer Segment</h3>
			<SingleChoiceChips
				options={customerSegmentOptions}
				setSelected={setCustomerSegment}
				selected={customerSegment}
			/>

			<OptionsCustomers optionType={customerSegment} />
		</section>
	);
};

export default CustomerSegment;
