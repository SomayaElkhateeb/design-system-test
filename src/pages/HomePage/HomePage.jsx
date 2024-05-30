import Setups from './comp/Setups';
import SlideCardTabs from './comp/SlideCardTabs';
import Slider from 'src/app/components/optimized/UiKits/Slider';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import data from './comp/data.json';
import { HomeLoading } from 'src/app/components/page/SchimmerLoading/HomeLoading';
import OrdersCard from 'src/app/components/optimized/Cards/OrderCard/OrdersCard';
import SlideCard from 'src/app/components/page/Cards/SlideCard';
import Reports from './comp/Reports';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import ProductForm from 'src/app/components/optimized/Forms/Product';

const HomePage = () => {
	// hook
	const { t } = useTranslation();
	const [screenSize, setScreenSize] = useState('');
	const [showLoading, setShowLoading] = useState(true);
	const { selectedOption, handleSelect } = useSelectBox();

	// resize slider
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setScreenSize(width < 1250 ? 'mid' : 'full');
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// loading home page
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLoading(false);
		}, 3000);

		return () => clearTimeout(timer); // Clear the timer on component unmount
	}, []);

	const slidesTabs = [
		{ title: t('Top selling'), content: data.containSelling },
		{ title: t('Top search'), content: data.containSelling },
		{ title: t('Top reviews'), content: data.containSelling },
	];

	return <ProductForm handleSubmit={(values) => console.log(values)} />;

	return (
		<>
			{showLoading ? (
				<HomeLoading />
			) : (
				<div className='w-full px-4 py-6'>
					<div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
						<div className='col-span-2'>
							<Setups />
						</div>
						<SlideCard
							items={data.reports}
							title={t('Reports')}
							itemsPerSlide={4}
							SlideComponent={Reports}
							selectedOption={selectedOption}
							handleSelect={handleSelect}
							dropdown
						/>
						<div className='col-span-2'>
							<OrdersCard latestOrders={data.latestOrders} title={t('Latest Orders')} dropdown />
						</div>
						<SlideCardTabs slides={slidesTabs} text={t('Products')} btn />
					</div>

					<div
						className='mt-6 bg-white border rounded-xl border-borders-lines h-fit'
						style={{ width: '100%' }}
					>
						{screenSize === 'mid' ? (
							<Slider size='mid' slides={data.slides} title={t('Get started with dookan')} />
						) : (
							<Slider size='full' slides={data.slides} title={t('Get started with dookan')} />
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
