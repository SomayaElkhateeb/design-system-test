import { LineChart } from 'src/app/components/optimized';
import Orders from '../../app/components/page/Cards/Orders';
import Products from './comp/Products';
import Reports from './comp/Reports';
import Setups from './comp/Setups';

const HomePage = () => {

	return (
		<div className='w-full h-full px-4 py-6'>
			<div className='grid grid-cols-3 gap-5'>
				<div className='col-span-2'>
					<Setups />
					{/* <LineChart /> */}
				</div>
				<Reports />
				<div className='col-span-2'>
					<Orders />
				</div>
				<Products />
			</div>

			<div></div>
		</div>
	);

	return <div>HomePage</div>;

};

export default HomePage;
