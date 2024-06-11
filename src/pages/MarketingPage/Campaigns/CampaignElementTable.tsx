// @ts-nocheck
import { forwardRef } from 'react';
import { Button } from 'src/app/components/optimized';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
	CampaignActivityInterface,
	CampaignDataInterface,
	CampaignTableInterface,
} from 'src/app/interface/CampaignTableInterface';
import { Box, TableCell } from '@mui/material';
import BaseTable from 'src/pages/CustomersPage/_comp/TableLayoutGlobal/base.table';
import { campaindata } from './Campaigns';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { MdFacebook } from 'react-icons/md';
import { getImageUrl } from 'src/app/utils';

const CampaignElementTable = ({ sortBy }: CampaignTableInterface, ref) => {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	const language = UseLanguage();
	//  headers

	const CampaignHeaders = [
		{ title: t('Activity') },
		{ title: t('Status') },
		{ title: t('Sessions') },
		{ title: t('Sales') },
		{ title: t('Expenses') },
		{ title: t('Net profit') },
	];

	const handelCampainStatus = (status: string) => {
		return (
			<span
				className={`px-2 p-1 rounded-md capitalize ${
					status === 'ended' || status === 'refused'
						? 'bg-error'
						: status === 'running'
						? 'bg-success'
						: status === 'in review'
						? 'bg-warning'
						: ''
				}`}
			>
				{status}
			</span>
		);
	};
	return (
		<Box className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={CampaignHeaders.map((h) => h)}
				rows={campaindata[0].activities?.map((e: CampaignActivityInterface, i: number) => {
					return {
						item: e,
						elements: [
							<TableCell
								onClick={() => {
									navigate(`?activityId=${e.id}`);
								}}
								sx={{
									fontSize: '13px',
									fontWeight: 400,
									color: 'blue',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: '10px',
								}}
							>
								<div className='border border-borders-lines rounded-lg size-10 flex items-center justify-center'>
									<img
										src={getImageUrl('social/facebook.svg')}
										alt='Platform Logo'
										className='w-6 h-6'
									/>
								</div>
								{e.name}
							</TableCell>,

							<TableCell sx={{ color: 'white', fontSize: '13px', fontWeight: 400 }}>
								{handelCampainStatus(e.status)}
							</TableCell>,
							<TableCell
								sx={{
									fontSize: '14px',
									fontWeight: 400,
								}}
							>
								{e.sessions}
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
};
export default CampaignElementTable;
