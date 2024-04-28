import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

export default function CustomersTable({ tableData }) {
	const language = UseLanguage();

	const { t } = useTranslation();

	const customersTableHeaders = [
		{ title: t('day') },
		{ title: t('new customers') },
		{ title: t('purchasing customers') },
		{ title: t('customer groups') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={customersTableHeaders.map((h) => h)}
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
								{e.new_customers}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.purchasing_customers}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.customer_groups}
							</TableCell>,
						],
					};
				})}
			/>
		</div>
	);
}

