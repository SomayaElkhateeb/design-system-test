import { useState } from 'react';
import data from './data.json';
import { Button } from 'src/app/components/optimized';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CampaignTable = ({ sortTerm, data }) => {
	// const [sortBy, setSortBy] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();
	// const navigate = useNavigate();

	// const sortData = (sortTerm) => {
	// 	if (sortBy === field) {
	// 		setSortBy(null); // Reset sorting
	// 	} else {
	// 		setSortBy(field);
	// 		couponsData.sort((a, b) => (a[field] < b[field] ? -1 : 1));
	// 	}
	// };

	const handleButtonClick = (campaignName) => {
		const activityParam = searchParams.get('campaign_activity');
		const newActivityParam = `&activity_details=${campaignName}`;
		const updatedSearchParams = activityParam ? `?campaign_activity=${activityParam}${newActivityParam}` : `?campaign_activity=${campaignName}`;
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
					{data.map((item) => (
						<tr key={item.name} className='rounded-xl bg-white'>
							<td className='px-4 py-4 paagraph text-primary'>
								<Button variant='link' onClick={() => handleButtonClick(item.name)}>
									{item.name}
								</Button>
							</td>
							<td className={`px-4 py-4 paagraph text-white `}>
								<span
									className={` p-1 rounded-lg ${
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
