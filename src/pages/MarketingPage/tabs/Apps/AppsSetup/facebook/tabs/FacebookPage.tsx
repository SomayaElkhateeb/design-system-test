import { FC } from 'react';
import { formatLikes, getImageUrl } from 'src/app/utils';
import PartnerCard from '../../_comp/PartnerCard';

interface Company {
	name: string;
	industry: string;
	likes: number;
	id: string;
}

interface FacebookPageProps {
	data: {
		description: string,
		companies: Company[],
	};
}

const FacebookPage: FC<FacebookPageProps> = ({ data }) => {
	return (
		<div>
			<p className='mb-3'>{data.description}</p>
			{data.companies.map((company) => (
				<PartnerCard
					key={company.id}
					imageUrl={getImageUrl('companies/t-terl.svg')}
					subtitle={company.industry}
					name={company.name}
					id={formatLikes(company.likes)}
				/>
			))}
		</div>
	);
};

export default FacebookPage;
