import { LineChart } from 'src/app/components/optimized';

import Orders from './comp/Orders';

import Reports from './comp/Reports';
import Products from './comp/Products';
import Setups from './comp/Setups';
import GetStartedCard from './comp/comp/GetStartedCard';
import { slides } from './data';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
	const { t } = useTranslation();
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

			<div className='bg-white rounded-xl border border-borders-lines h-fit mt-6'>
				<GetStartedCard size='mini' slides={slides} title={t('Get started with dookan')} />
			</div>
		</div>
	);
};

export default HomePage;
