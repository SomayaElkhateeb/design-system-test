import { Link } from 'react-router-dom';
import { BackIcon } from 'src/app/utils/icons';

const CampaignsHeader = ({ title }) => {
	return (
		<div className='flex justify-between px-4 py-3 bg-white sticky top-[109px] z-50'>
			<div className='flex items-center'>
				<Link to={-1}>
					<BackIcon />
				</Link>
				<h2 className='text-lg font-semibold capitalize text-title'>{title}</h2>
			</div>
		</div>
	);
};
export default CampaignsHeader;
