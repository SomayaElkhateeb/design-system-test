import { Button } from 'src/app/components/optimized';
import RowOrderItems from './RowOrderItems';

export default function OrderItemContain() {
	return (
		<div>
			<RowOrderItems />
			<div className='p-3'>
				<hr />
				<div className='flex justify-between items-center pt-3'>
					<div className='text-subtitle text-sm flex flex-col gap-1'>
						<p>Sub Total</p>
						<Button variant='link'>+ Add Discount</Button>
						<Button variant='link'>Edit Shipping</Button>
						<p>Tax</p>
					</div>
					<div className='text-title text-sm flex flex-col gap-1'>
						<p>SAR 450.00</p>
						<p>% ------</p>
						<p>SAR 450.00</p>
						<p>SAR 450.00</p>
					</div>
				</div>
			</div>

			<div className='p-3 pt-0'>
				<hr />
				<div className='flex items-center justify-between pt-3'>
					<p className='text-subtitle text-sm uppercase'>total</p>
					<p className='text-title text-sm'>SAR 450.00</p>
				</div>
			</div>
		</div>
	);
}
