// @ts-nocheck
import { forwardRef } from 'react';
import { Button } from 'src/app/components/optimized';
import { useSearchParams } from 'react-router-dom';
import { CampaignDataInterface, CampaignTableInterface } from 'src/app/interface/CampaignTableInterface';
import { Box, TableCell } from '@mui/material';
import BaseTable from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { data } from './Campaigns';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';

const CampaignTable = forwardRef(({ sortBy }: CampaignTableInterface, ref) => {
	// const getNumericValue = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;

	// const sortFunctions = {
	// 	'Campaign (A-Z)': (a, b) => a.name.localeCompare(b.name),
	// 	'Campaign (Z-A)': (a, b) => b.name.localeCompare(a.name),
	// 	'Status (A-Z)': (a, b) => a.status.localeCompare(b.status),
	// 	'Status (Z-A)': (a, b) => b.status.localeCompare(a.status),
	// 	'Sales Descending': (a, b) => getNumericValue(b.sales) - getNumericValue(a.sales),
	// 	'Sales Ascending': (a, b) => getNumericValue(a.sales) - getNumericValue(b.sales),
	// 	'Expenses Descending': (a, b) => getNumericValue(b.expenses) - getNumericValue(a.expenses),
	// 	'Expenses Ascending': (a, b) => getNumericValue(a.expenses) - getNumericValue(b.expenses),
	// 	'Net Profit Descending': (a, b) => getNumericValue(b.netProfit) - getNumericValue(a.netProfit),
	// 	'Net Profit Ascending': (a, b) => getNumericValue(a.netProfit) - getNumericValue(b.netProfit),
	// };

	// const arrangeData = (data, sortBy) => {
	// 	const sortFunction = sortFunctions[sortBy];
	// 	if (!sortFunction) {
	// 		return data;
	// 	}
	// 	return data.slice().sort(sortFunction);
	// };

	// const arrangedData = arrangeData(data, sortBy);

	//  hooks
	const { t } = useTranslation();
	const language = UseLanguage();
	//  headers

	const CampaignHeaders = [
		{ title: t('Campaign') },
		{ title: t('Status') },

		{ title: t('Sales') },
		{ title: t('Expenses') },
		{ title: t('Net profit') },
	];

	return (
		<Box ref={ref}>
			<BaseTable
				language={language}
				color='#55607A'
				headers={CampaignHeaders.map((h) => h)}
				rows={data?.map((e: CampaignDataInterface, i: number) => {
					return {
						item: e,
						elements: [
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 600,
								}}
							>
								{e.name}
							</TableCell>,

							<TableCell sx={{ color: 'white', fontSize: '13px', fontWeight: 400 }}>
								<span
									className={`px-2 p-1 rounded-md capitalize ${
										e.status === 'ended' || e.status === 'refused'
											? 'bg-error'
											: e.status === 'running'
											? 'bg-success'
											: e.status === 'in review'
											? 'bg-warning'
											: ''
									}`}
								>
									{e.status}
								</span>
							</TableCell>,

							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								SAR {e.sales}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								SAR {e.expenses}
							</TableCell>,

							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								SAR {e.netProfit}
							</TableCell>,
						],
					};
				})}
			/>
		</Box>
	);
});
export default CampaignTable;
