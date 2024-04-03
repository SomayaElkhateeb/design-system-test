import CampaignBtns from './CampaignBtns';
import CampaignStatus from './CampaignStatus';

const Campaigns = () => {
	return (
		<div>
			<CampaignStatus />
			<CampaignBtns />
			<CampaignTable />
		</div>
	);
};

export default Campaigns;
const CampaignsData = [
	{
		name: 'Summer campaign',
		status: 'running',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'ended',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'in review',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'refused',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
];

const CampaignTable = () => {
	return (
		<div className='flex flex-col'>
			<table className=' w-full table-auto rounded -lg'>
				<thead>
					<tr className='text-left bg-white'>
						<th className='px-4 py-4 subheading '>Campaign</th>
						<th className='px-4 py-4 subheading'>Status </th>
						<th className='px-4 py-4 subheading'>sales </th>
						<th className='px-4 py-4 subheading'>Expenses </th>
						<th className='px-4 py-4 subheading'>Net profit </th>
					</tr>
				</thead>

				<tbody>
					{CampaignsData.map((campaign) => (
						<tr key={campaign.name} className='rounded-xl bg-white'>
							<td className='px-4 py-4 paagraph text-primary'>{campaign.name}</td>
							<td className={`px-4 py-4 paagraph text-white `}>
								<span
									className={` p-1 rounded-lg ${
										campaign.status === 'ended' || campaign.status === 'refused'
											? 'bg-error'
											: campaign.status === 'running'
											? 'bg-success'
											: campaign.status === 'in review'
											? 'bg-warning'
											: ''
									}`}
								>
									{campaign.status}
								</span>
							</td>
							<td className='px-4 py-4 paagraph text-title'>{campaign.sales}</td>
							<td className='px-4 py-4 paagraph text-title'>{campaign.expenses}</td>
							<td className='px-4 py-4 paagraph text-title'>{campaign.netProfit}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
