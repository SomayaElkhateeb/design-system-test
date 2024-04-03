import React from 'react';
import { getImageUrl } from 'src/app/utils';
import TikTokCard from '../TikTokCard';
import TikTokBusiness from '../TikTokBusiness';

interface Partner {
	id: string;
	name: string;
	is_connected: boolean;
}

interface TikBusinessAccountProps {
	data: {
		description: string;
		partners: Partner[];
	};
}

const TikBusinessAccount: React.FC<TikBusinessAccountProps> = ({ data }) => {
	return (
		<div>
			<p className='border-b pb-5'>{data.description}</p>
			<div>
				{data.partners.map((partner) => (
					<TikTokCard
						key={partner.id}
						partnerName={partner.name}
						partnerImage={getImageUrl('companies/t-terl.svg')}
						status={partner.is_connected}
						userId={partner.id}
					/>
				))}
			</div>
			<TikTokBusiness />
		</div>
	);
};

export default TikBusinessAccount;
