import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

export default function OrdersTable({ tableData }) {
	const language = UseLanguage();

	const { t } = useTranslation();

	const ordersTableHeaders = [
		{ title: t('day') },
		{ title: t('orders') },
		{ title: t('average units ordered') },
		{ title: t('average order value') },
		{ title: t('delivered') },
		{ title: t('returned quantity') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={ordersTableHeaders.map((h) => h)}
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
								{e.day}
							</TableCell>,
							<TableCell sx={{ fontSize: '13px', fontWeight: 400 }}></TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.orders}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.average_units_ordered}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.average_order_value}
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
								{e.returned_quantity}
							</TableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
