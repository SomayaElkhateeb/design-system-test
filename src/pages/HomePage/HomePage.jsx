import { LineChart } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import Setups from './comp/Setups';
import SlideCard from './comp/SlideCard';
import CustomDetails from './comp/CustomDetails';
import { data, slides, slidesContent, slidesTabs, sortMenus } from './comp/data';
import SlideCardTabs from './comp/SlideCardTabs';
import GetStartedCard from './comp/GetStartedCard';

const HomePage = () => {
	const { t } = useTranslation();
	return (
		<div className='w-full h-full px-4 py-6'>
			<div className='grid grid-cols-3 gap-5'>
				<div className='col-span-2'>
					<Setups />
					{/* <LineChart /> */}
				</div>
				<SlideCard slides={slidesContent} sortMenus={sortMenus} text={t('Reports')} btn />
				<div className='col-span-2'>
					<CustomDetails data={data} sortMenus={sortMenus} text={t('Latest Orders')} />
				</div>
				<SlideCardTabs slides={slidesTabs} sortMenus={sortMenus} text={t('Products')} btn />
			</div>

			<div className='mt-6 bg-white border rounded-xl border-borders-lines h-fit'>
				<GetStartedCard size='mini' slides={slides} title={t('Get started with dookan')} />
			</div>
		</div>
	);
};

export default HomePage;
