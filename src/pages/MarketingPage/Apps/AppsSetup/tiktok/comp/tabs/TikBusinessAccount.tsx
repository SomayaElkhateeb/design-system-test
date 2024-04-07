import React from 'react';
import { getImageUrl } from 'src/app/utils';
import TikTokCard from '../TikTokCard';
import TikTokBusiness from '../TikTokBusiness';
import { TikBusinessAccountProps } from '../tikTokTypes';



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
