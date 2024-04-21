import { useTranslation } from 'react-i18next';
import { TableCell } from '@mui/material';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { Product } from 'src/app/interface/ProductInterface';
import BaseTable from '../Customers/TableLayoutGlobal/base.table';

export default function ProductsTable({ data }: { data: data[] }) {
	//  hooks
	const language = UseLanguage();
	const { t } = useTranslation();

	//  headers

	const productsHeaders = [
		{ title: t('Product & Category') },
		{ title: t('quantity') },
		{ title: t('Price') },
		{ title: t('searches') },
		{ title: t('views') },
		{ title: t('quantity sold') },
		{ title: t('returns') },
	];

	return (
		<BaseTable
			language={language}
			color='#55607A'
			headers={productsHeaders.map((h) => h)}
			rows={data?.map((e: Product, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<div className=' flex  items-center gap-[.4rem] '>
								<div>
									<img className='size-10' src={e.img} loading='lazy' alt={e.title} />
								</div>

								<div className='flex flex-col'>
									<p className='text-title text-[.9rem] font-semibold'>{e.title}</p>
									<p className='text-subtitle text-[.8rem]'>{e.category}</p>
								</div>
							</div>
						</TableCell>,

						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<p className={e.quantity === 0 ? 'text-error' : 'text-black'}>
								{e.quantity > 0 ? e.quantity : t('Out of stock')}
							</p>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<span className='text-title'>SAR</span> {e.price?.toFixed()}
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<p className='text-title'>{e.searches}</p>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<p className='text-title'>{e.views}</p>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<p className='text-title'>{e.quantitySold}</p>
						</TableCell>,
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							<p className='text-title'>{e.returns}</p>
						</TableCell>,
					],
				};
			})}
		/>
	);
}
