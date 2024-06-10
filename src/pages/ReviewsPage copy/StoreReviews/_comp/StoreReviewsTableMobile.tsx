import { StarActiveIcon } from 'src/app/utils/icons';
import { TableRow } from '../StoreReviews';

export default function StoreReviewsTableMobile({ tableData }: { tableData: TableRow[] }) {
	return (
		<div className='grid gap-3 divide-y'>
			{tableData.map((item, index) => (
				<div key={index} className='grid gap-1 py-3'>
					<h2 className='title'>{item.day}</h2>
					<TableBody item={item} />
				</div>
			))}
		</div>
	);
}

function TableBody({ item }: { item: TableRow }) {
	const tableBodyItems = [
		{ label: 'Ratings No.', value: item.ratingsNo },
		{ label: 'Average', value: item.average },
		{ label: 'Orders', value: item.orders },
		{ label: 'Top customer group', value: item.topCustomerGroup },
		{ label: 'Returns', value: item.returns },
	];

	return (
		<section
			className='grid gap-x-5 gap-y-3'
			style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))' }}
		>
			{tableBodyItems.map((bodyItem, index) => (
				<div className='grid gap-1' key={index}>
					<p className='paragraph text-subtitle'>{bodyItem.label}</p>
					<p className='paragraph text-title'>
						{bodyItem.label === 'Average' ? (
							<span className='flex gap-0.5 items-center'>
								<StarActiveIcon className='fill-neutral-1' />
								<p>{bodyItem.value}</p>
							</span>
						) : (
							<>{bodyItem.value}</>
						)}
					</p>
				</div>
			))}
		</section>
	);
}
