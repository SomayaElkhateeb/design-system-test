import { nanoid } from 'nanoid';
import { getImageUrl } from 'src/app/utils';

const data = [
	{
		id: nanoid(),
		text: 'Solid Anti-Pilling Sweatshirt with Round Neck and Long Sleeves',
		color: 'Red',
		size: 'XL',
		sku: 'SF1133569600-1',
		quantity: 15,
		total: 450,
	},
	// {
	// 	id: nanoid(),
	// 	text: 'Solid Anti-Pilling Sweatshirt with Round Neck and Long Sleeves',
	// 	color: 'Red',
	// 	size: 'XL',
	// 	sku: 'SF1133569600-1',
	// 	quantity: 15,
	// 	total: 450,
	// },
];
export default function RowOrderItems() {
	return (
		<>
			{data.map((e) => {
				return (
					<div key={e.id}>
						<hr />
						<div className='flex justify-between p-3'>
							<div className='flex items-center gap-2'>
								<div className='size-[4.6875rem] rounded-md overflow-hidden'>
									<img src={getImageUrl('product/product.png')} />
								</div>
								<div className='flex flex-col justify-between h-full'>
									<h3 className='title text-sm'>
										{e.text}
										<span className='text-subtitle font-normal'>
											{' '}
											/ {e.color} / {e.size}
										</span>
									</h3>
									<p className='text-subtitle text-sm'>SKU: {e.sku}</p>
									<p className='text-title text-sm'>Qty: {e.quantity}</p>
								</div>
							</div>
							<p className='text-title text-sm flex justify-end items-end'>SAR {e.total}.00</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
