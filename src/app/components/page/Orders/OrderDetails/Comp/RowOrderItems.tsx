import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';
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
	//  hooks
	const {t}=useTranslation()
	return data.map((e) => {
		return (
			<div key={e.id} className='flex-col-top-section-pages gap-2.5'>
				<hr />
				<div className='flex md:flex-row flex-col justify-between px-3'>
					<div className='md:w-[85%] flex items-center gap-2'>
						<div className='size-[4.6875rem] rounded-md overflow-hidden'>
							<img src={getImageUrl('product/product.png')} />
						</div>
						<div className='flex-col-top-section-pages gap-1 justify-between h-full'>
							<h3 className='title text-sm'>
								{e.text}
								<span className='text-subtitle font-normal'>
									{' '}
									/ {e.color} / {e.size}
								</span>
							</h3>
							<p className='text-subtitle text-sm'>SKU: {e.sku}</p>
							<p className='text-title text-sm'>{t("Qty")}: {e.quantity}</p>
						</div>
					</div>
					<p className='text-title text-sm flex justify-end items-end'>SAR {e.total}.00</p>
				</div>
			</div>
		);
	});
}
