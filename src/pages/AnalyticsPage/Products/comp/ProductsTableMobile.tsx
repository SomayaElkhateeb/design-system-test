import { getImageUrl } from 'src/app/utils';
import { AnalyticsProduct } from '../Products';

export default function ProductsTableMobile({ tableData }: { tableData: AnalyticsProduct[] }) {
	return (
		<div className='grid gap-3 divide-y'>
			{tableData.map((item) => (
				<div key={item.id} className='grid gap-1 py-3'>
					<TableHeader img={item.imageUrl} name={item.product_name} price={item.price} />
					<TableBody item={item} />
				</div>
			))}
		</div>
	);
}

function TableHeader({ img, name, price }: { img: string; name: string; price: string }) {
	return (
		<section className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<div className='overflow-hidden border rounded-lg size-[1.87rem] border-light-2'>
					<img src={getImageUrl(img)} alt={name} className='object-cover size-full' />
				</div>
				<h2 className='title'>{name}</h2>
			</div>
			<p>{price}</p>
		</section>
	);
}

function TableBody({ item }: { item: AnalyticsProduct }) {
	const tableBodyItems = [
		{ label: 'Qty', value: item.quantity },
		{ label: 'Qty sold', value: item.quantity_sold },
		{ label: 'RETURNS', value: item.returns },
		{ label: 'SEARCHES', value: item.searches },
		{ label: 'VIEWS', value: item.views },
	];

	return (
		<section
			className='grid gap-x-5 gap-y-3'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))' }}
		>
			{tableBodyItems.map((bodyItem, index) => (
				<div className='grid gap-1' key={index}>
					<p className='paragraph text-subtitle'>{bodyItem.label}</p>
					<p className='paragraph text-title'>{bodyItem.value}</p>
				</div>
			))}
		</section>
	);
}
