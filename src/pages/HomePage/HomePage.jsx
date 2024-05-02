import Setups from './comp/Setups';
import SlideCard from './comp/SlideCard';
import CustomDetails from './comp/CustomDetails';
import SlideCardTabs from './comp/SlideCardTabs';
import Slider from 'src/app/components/optimized/UiKits/Slider';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
	// hook
	const { t } = useTranslation();
	const [screenSize, setScreenSize] = useState('');

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

	//  all data
	const slides = [
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('How to register domain'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('SEO in details'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Card 1.',
		},
		{
			image: '/Rectangle.png',
			title: t('How to finish steps'),
			description: 'Description for Card 1.',
		},
	];

	const reports = [
		{ id: 1, title: t('Visitors'), value: 0 },
		{ id: 2, title: t('Product views'), value: 0 },
		{ id: 3, title: t('Orders received'), value: 0 },
		{ id: 4, title: t('Revenue'), value: 0 },
	];

	const reportsPercentage = [
		{ id: 1, percentage: 4.75, positive: false, title: t('Visitors with product views'), value: 0 },
		{ id: 2, percentage: 4.75, positive: true, title: t('Added to cart'), value: 0 },
		{ id: 3, percentage: 4.75, positive: false, title: t('Started checkouts'), value: 0 },
		{ id: 4, percentage: 4.75, positive: true, title: t('Placed orders'), value: 0 },
	];

	const slidesContent = [
		{ id: 1, content: reports },
		{ id: 2, content: reportsPercentage },
	];

	const containSelling = [
		{
			id: 1,
			img: '/cloud.svg',
			title: 'DJI Mavic Pro 2',
			subtitle: 'Blankets',
			qty: 50,
			price: 10000,
		},
		{
			id: 2,
			img: '/cloud.svg',
			title: 'DJI Mavic Pro 2',
			subtitle: 'Blankets',
			qty: 50,
			price: 10000,
		},
		{
			id: 3,
			img: '/cloud.svg',
			title: 'DJI Mavic Pro 2',
			subtitle: 'Blankets',
			qty: 50,
			price: 10000,
		},
	];

	const slidesTabs = [
		{ title: t('Top selling'), content: containSelling },
		{ title: t('Top search'), content: <p>{t('Top search')}</p> },
		{ title: t('Top reviews'), content: <p>{t('Top reviews')}</p> },
	];
	const data = [
		{
			id: 1,
			img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
			fName: 'walied',
			lName: 'sayed',
			status: t('Awaiting Payment'),
			color: '#8965742',
			price: 50,
			currency: 'SAR',
			date: '5/6/2021',
		},
		{
			id: 2,
			fName: 'Ahmed',
			lName: 'Rady',
			status: t('Canceled'),
			color: '#8965742',
			price: 50,
			currency: 'SAR',
			date: '5/6/2021',
		},
		{
			id: 3,
			img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
			fName: 'walied',
			lName: 'sayed',
			status: t('Paid'),
			color: '#8965742',
			price: 50,
			currency: 'SAR',
			date: '5/6/2021',
		},
		{
			id: 4,
			fName: 'Ahmed',
			lName: 'Rady',
			status: t('Awaiting Payment'),
			color: '#8965742',
			price: 50,
			currency: 'SAR',
			date: '5/6/2021',
		},
	];
	const sortMenus = [
		{ id: 1, text: t('Today') },
		{ id: 2, text: t('Last week') },
		{ id: 3, text: t('Last month') },
	];

	return (
		<div className='w-full h-full px-4 py-6'>
			<div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
				<div className='col-span-2'>
					<Setups />
				</div>
				<SlideCard slides={slidesContent} text={t('Reports')} btn sortMenus={sortMenus} />
				<div className='col-span-2'>
					<CustomDetails data={data} text={t('Latest Orders')} btn />
				</div>
				<SlideCardTabs slides={slidesTabs} text={t('Products')} btn sortMenus={sortMenus} />
			</div>

			<div
				className='mt-6 bg-white border rounded-xl border-borders-lines h-fit'
				style={{ width: '100%' }}
			>
				{screenSize === 'mid' ? (
					<Slider size='mid' slides={slides} title={t('Get started with dookan')} />
				) : (
					<Slider size='full' slides={slides} title={t('Get started with dookan')} />
				)}
			</div>
		</div>
	);
};

export default HomePage;
