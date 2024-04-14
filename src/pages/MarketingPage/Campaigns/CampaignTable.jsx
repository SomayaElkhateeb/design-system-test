import { forwardRef } from 'react';
import { Button } from 'src/app/components/optimized';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CampaignTable = forwardRef(({ sortBy, data }, ref) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const getNumericValue = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;

	const sortFunctions = {
		'Campaign (A-Z)': (a, b) => a.name.localeCompare(b.name),
		'Campaign (Z-A)': (a, b) => b.name.localeCompare(a.name),
		'Status (A-Z)': (a, b) => a.status.localeCompare(b.status),
		'Status (Z-A)': (a, b) => b.status.localeCompare(a.status),
		'Sales (High-Low)': (a, b) => getNumericValue(b.sales) - getNumericValue(a.sales),
		'Sales (Low-High)': (a, b) => getNumericValue(a.sales) - getNumericValue(b.sales),
		'Expenses (High-Low)': (a, b) => getNumericValue(b.expenses) - getNumericValue(a.expenses),
		'Expenses (Low-High)': (a, b) => getNumericValue(a.expenses) - getNumericValue(b.expenses),
		'Net Profit (High-Low)': (a, b) => getNumericValue(b.netProfit) - getNumericValue(a.netProfit),
		'Net Profit (Low-High)': (a, b) => getNumericValue(a.netProfit) - getNumericValue(b.netProfit),
	};

	const arrangeData = (data, sortBy) => {
		const sortFunction = sortFunctions[sortBy];
		if (!sortFunction) {
			console.error('Invalid sort criteria:', sortBy);
			return data; // or throw error
		}
		return data.slice().sort(sortFunction);
	};

	const arrangedData = arrangeData(data, sortBy);

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
			<table ref={ref} className=' w-full table-auto rounded -lg'>
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
});
export default CampaignTable;