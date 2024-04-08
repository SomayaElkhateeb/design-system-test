import { useState } from 'react';
import data from './data.json';
import { Button } from 'src/app/components/optimized';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as XLSX from "xlsx/xlsx.mjs";
import { ExportIcon } from 'src/app/utils/icons';
const CampaignTable = ({ arrangeTerm, data }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const arrangeData = (data, arrangeTerm) => {
		switch (arrangeTerm) {
			case 'Campaign':
				return data.sort((a, b) => a.name.localeCompare(b.name));
			case 'Status':
				return data.sort((a, b) => a.status.localeCompare(b.status));
			case 'Sales':
				return data.sort((a, b) => parseFloat(a.sales) - parseFloat(b.sales));
			case 'Expenses':
				return data.sort((a, b) => parseFloat(a.expenses) - parseFloat(b.expenses));
			case 'Net Profit':
				return data.sort((a, b) => parseFloat(a.netProfit) - parseFloat(b.netProfit));
			default:
				return data;
		}
	};

	const arrangedData = arrangeData(data, arrangeTerm);


	const handleButtonClick = (campaignName) => {
		const activityParam = searchParams.get('campaign_activity');
		const newActivityParam = `&activity_details=${campaignName}`;
		const updatedSearchParams = activityParam
			? `?campaign_activity=${activityParam}${newActivityParam}`
			: `?campaign_activity=${campaignName}`;
		setSearchParams(updatedSearchParams);
	};


	return (
		<div className='flex flex-col'>



			<table className=' w-full table-auto rounded -lg'>
				<thead>
					<tr className='text-left bg-white'>
						<th className='px-4 py-4 subheading '>Campaign</th>
						<th className='px-4 py-4 subheading'>Status </th>
						{data[0].sessions && <th className='px-4 py-4 subheading'>Sessions </th>}
						<th className='px-4 py-4 subheading'>sales </th>
						<th className='px-4 py-4 subheading'>Expenses </th>
						<th className='px-4 py-4 subheading'>Net profit </th>
					</tr>
				</thead>
				{/* data.campaigns */}
				<tbody>
					{arrangedData.map((item) => (
						<tr key={item.name} className='rounded-xl bg-white'>
							<td className='px-4 py-4 paagraph text-primary'>
								<Button variant='link' onClick={() => handleButtonClick(item.name)}>
									{item.name}
								</Button>
							</td>
							<td className={`paragraph text-white `}>
								<span
									className={`px-2 p-1 rounded-md capitalize ${
										item.status === 'ended' || item.status === 'refused'
											? 'bg-error'
											: item.status === 'running'
											? 'bg-success'
											: item.status === 'in review'
											? 'bg-warning'
											: ''
									}`}
								>
									{item.status}
								</span>
							</td>
							{item.sessions && <td className='px-4 py-4 paagraph text-title'>{item.sessions}</td>}
							<td className='px-4 py-4 paagraph text-title'>{item.sales}</td>
							<td className='px-4 py-4 paagraph text-title'>{item.expenses}</td>
							<td className='px-4 py-4 paagraph text-title'>{item.netProfit}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default CampaignTable;
