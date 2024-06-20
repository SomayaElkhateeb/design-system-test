import React from 'react';
import { getImageUrl } from 'src/app/utils';
import BusinessAccountCard from '../../_comp/BusinessAccountCard';
import { Button } from 'src/app/components/optimized';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

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
					<BusinessAccountCard
						key={partner.id}
						partnerName={partner.name}
						partnerImage={getImageUrl('companies/t-terl.svg')}
						status={partner.is_connected}
						userId={partner.id}
					/>
				))}
			</div>
			<div className='pl-[72px] mt-5'>
				<Button variant='link' RightIcon={<LiaExternalLinkAltSolid />}>
					<a href='#' className='text-blue-500 mr-1'>
						TikTok Ads Manager Account
					</a>
				</Button>
			</div>
			{/* <TikTokBusiness /> */}
		</div>
	);
};

export default TikBusinessAccount;
