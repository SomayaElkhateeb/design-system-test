import Avatar from '../../UiKits/Avatar';

// Define the type for the order object
export interface Order {
	id: number;
	imageUrl?: string;
	firstName: string;
	lastName: string;
	orderStatus: string;
	orderNumber: string;
	price: number;
	currency: string;
	date: string;
}

export default function OrderItem({ order }: { order: Order }) {
	const { id, imageUrl, firstName, lastName, orderStatus, orderNumber, price, currency, date } =
		order;
	return (
		<div key={id} className='flex justify-between py-0.5'>
			<div className='flex justify-between gap-3'>
				<Avatar
					variant='user'
					firstName={firstName}
					lastName={lastName}
					imageUrl={imageUrl}
					size='lg'
				/>
				<div className='flex flex-col justify-between'>
					<h2 className='text-title text-sm'>
						{firstName} {lastName} <span className='text-xs text-subtitle'>{orderNumber}</span>
					</h2>
					<p
						className={`paragraph ${
							// Apply different styles based on order status
							orderStatus === 'Awaiting Payment'
								? 'text-neutral-2'
								: orderStatus === 'Canceled'
								? 'text-subtitle'
								: 'text-sec-pressed'
						}`}
					>
						{orderStatus}
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-between'>
				<h4 className='text-right text-title text-sm font-semibold'>
					{price} {currency}
				</h4>
				<p className='text-subtitle text-xs'>{date}</p>
			</div>
		</div>
	);
}
