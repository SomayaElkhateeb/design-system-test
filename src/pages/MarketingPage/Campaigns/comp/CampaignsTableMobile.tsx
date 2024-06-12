import { getImageUrl } from 'src/app/utils';
import MoreAction from '../../_comp/MoreAction';
import { Link } from 'react-router-dom';

interface Campaign {
	id: string;
	name: string;
	status: string;
	imageUrl?: string;
}

interface CampaignsTableProps {
	campaigns: Campaign[];
	actions?: boolean;
	searchParams?: string;
}
interface CampaignItemProps {
	campaign: Campaign;
	actions?: boolean;
	searchParams?: string;
}

export default function CampaignsTableMobile({
	campaigns,
	actions = false,
	searchParams,
}: CampaignsTableProps) {
	return (
		<div className='divide-y bg-white'>
			{campaigns.map((campaign, index) => (
				<CampaignItem key={index} campaign={campaign} actions={actions} searchParams={searchParams} />
			))}
		</div>
	);
}

function CampaignItem({ campaign, actions, searchParams }: CampaignItemProps) {
	const linkPath = searchParams ? `?${searchParams}=${campaign.id}` : campaign.id;
	return (
		<div className='flex items-center justify-between p-1.5'>
			<section className='flex gap-1'>
				{campaign.imageUrl && (
					<div className='border border-borders-lines rounded-lg size-10 grid place-content-center'>
						<img src={getImageUrl(campaign.imageUrl)} alt={campaign.name} className='size-6' />
					</div>
				)}
				<div className='grid gap-0.5'>
					<Link to={linkPath}>
						<h2 className='title'>{campaign.name}</h2>
					</Link>
					<StatusBadge status={campaign.status} />
				</div>
			</section>
			{actions && <MoreAction onClick={() => console.log('Delete')} />}
		</div>
	);
}

function StatusBadge({ status }: { status: string }) {
	const getStatusClasses = (status: string) => {
		switch (status) {
			case 'ended':
			case 'refused':
				return 'bg-error';
			case 'running':
				return 'bg-success';
			case 'in review':
				return 'bg-warning';
			default:
				return '';
		}
	};

	return (
		<span
			className={`px-2 p-[0.2rem] rounded-md w-fit text-white paragraph ${getStatusClasses(
				status,
			)}`}
		>
			{status}
		</span>
	);
}
