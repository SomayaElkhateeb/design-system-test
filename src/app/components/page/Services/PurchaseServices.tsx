import { useNavigate } from 'react-router-dom';
import RatedCard from '../../optimized/Cards/RatedCard';

export default function PurchaseServices() {
	//  hooks
	const navigate = useNavigate();

	//  dummy array
	const array = [...Array(3)];

	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[1.1rem]'>
			{array.map((e, i) => (
				<RatedCard onClick={() => navigate('?service_id=1')} key={i} />
			))}
		</div>
	);
}
