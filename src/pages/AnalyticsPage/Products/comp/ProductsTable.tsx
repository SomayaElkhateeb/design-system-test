import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { getImageUrl } from 'src/app/utils';

export default function ProductsTable({ tableData }) {
	const language = UseLanguage();

	const { t } = useTranslation();

	const productsTableHeaders = [
		{ title: t('product & category') },
		{ title: t('quantity') },
		{ title: t('Price') },
		{ title: t('searches') },
		{ title: t('views') },
		{ title: t('quantity sold') },
		{ title: t('returns') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={productsTableHeaders.map((h) => h)}
				rows={tableData?.map((e) => {
					return {
						item: e,
						elements: [
							<TableCell
								sx={{
									fontSize: '13px',
									fontWeight: 400,
								}}
							>
								<div className='flex flex-1 gap-3'>
									<div className='overflow-hidden border rounded-lg size-10 border-light-2'>
										<img
											src={getImageUrl(e.imageUrl)}
											alt={e.product_name}
											className='object-cover size-full'
										/>
									</div>
									<div className='flex flex-col justify-around'>
										<h2 className='title'>{e.product_name}</h2>
										<p className='paragraph text-subtitle'>{e.category}</p>
									</div>
								</div>
							</TableCell>,
							<TableCell sx={{ fontSize: '13px', fontWeight: 400 }}></TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.quantity}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.price}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.searches}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.delivered}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.views}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.quantity_sold}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.returns}
							</TableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
