import React from 'react';
import BusinessAccountCard from '../../_comp/BusinessAccountCard';
import { getImageUrl } from 'src/app/utils';
import { Button } from 'src/app/components/optimized';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

interface Partner {
	name: string;
	id: string;
	logo: string;
	is_connected: boolean;
}

interface Props {
	data: {
		description: string;
		partners: Partner[];
	};
}
const SnapBusinessAccount: React.FC<Props> = ({ data }) => {
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
						Snapchat Ads Manager Account
					</a>
				</Button>
			</div>
		</div>
	);
};

export default SnapBusinessAccount;
