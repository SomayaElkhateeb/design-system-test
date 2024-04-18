// import { useTranslation } from 'react-i18next';
import { SetupCard } from 'src/app/components/optimized';
import { InventoryIcon, PaymentIcon, ProductsIcon, SettingsIcon, ShippingIcon } from 'src/app/utils/icons';
// const { t } = useTranslation();
// const basicMethod = [
// 	{
// 		title: t('general settings'),
// 		description: t('Set your store general information'),
// 		buttonText: t('Activate'),
// 	},
// 	{
// 		title: t('Products'),
// 		description: t('Add at least 1 product to your store'),
// 		buttonText: t('Add'),
// 	},
// 	{
// 		title: t('Inventory'),
// 		description: t('Create at least 1 inventory to locate and manage'),
// 		buttonText: t('Add'),
// 	},
// ];
// const basicIcons = {
// 	[t('general settings')]: SettingsIcon,
// 	[t('Products')]: ProductsIcon,
// 	[t('Inventory')]: InventoryIcon,
// };

// const basicContain = (
// 	<div className='flex gap-4'>
// 		{basicMethod.map((item, index) => (
// 			<SetupCard key={index} Icon={basicIcons[item.title]} {...item} />
// 		))}
// 	</div>
// );

// const servicesMethod = [
// 	{
// 		title: t('shipping'),
// 		description: t('Add shipping method for your store, so you can deliver products to your customers'),
// 		buttonText: t('Activate'),
// 	},
// 	{
// 		title: t('payment'),
// 		description: t('Add payment method for your store, so your customers can pay you online'),
// 		buttonText: t('Activate'),
// 	},
// ];
// const servicesIcons = {
// 	[t('shipping')]: ShippingIcon,
// 	[t('payment')]: PaymentIcon,
// };

// const servicesContain = (
// 	<div className='flex gap-4'>
// 		{servicesMethod.map((item, index) => (
// 			<SetupCard key={index} Icon={servicesIcons[item.title]} {...item} />
// 		))}
// 	</div>
// );

// const tabs = [
// 	{
// 		title: t('Basic setup'),
// 		content: basicContain,
// 	},
// 	{
// 		title: t('Services setup'),
// 		content: servicesContain,
// 	},
// ];

// const slides = [
// 	{
// 		image: 'https://placehold.co/600x400',
// 		title: t('How to finish steps'),
// 		description: 'Description for Card 1.',
// 	},
// 	{
// 		image: 'https://placehold.co/600x400',
// 		title: t('How to register domain'),
// 		description: 'Description for Card 1.',
// 	},
// 	{
// 		image: 'https://placehold.co/600x400',
// 		title: t('SEO in details'),
// 		description: 'Description for Card 1.',
// 	},
// 	{
// 		image: 'https://placehold.co/600x400',
// 		title: t('How to finish steps'),
// 		description: 'Description for Card 1.',
// 	},
// 	{
// 		image: 'https://placehold.co/600x400',
// 		title: t('How to finish steps'),
// 		description: 'Description for Card 1.',
// 	},
// ];

// const sortMenus = [
// 	{ id: 1, text: t('Today') },
// 	{ id: 2, text: t('Last week') },
// 	{ id: 3, text: t('Last month') },
// ];

// const reports = [
// 	{ id: 1, title: t('Visitors'), value: 0 },
// 	{ id: 2, title: t('Product views'), value: 0 },
// 	{ id: 3, title: t('Orders received'), value: 0 },
// 	{ id: 4, title: t('Revenue'), value: 0 },
// ];

// const reportsPercentage = [
// 	{ id: 1, percentage: 4.75, positive: false, title: t('Visitors with product views'), value: 0 },
// 	{ id: 2, percentage: 4.75, positive: true, title: t('Added to cart'), value: 0 },
// 	{ id: 3, percentage: 4.75, positive: false, title: t('Started checkouts'), value: 0 },
// 	{ id: 4, percentage: 4.75, positive: true, title: t('Placed orders'), value: 0 },
// ];

// const slidesContent = [
// 	{ id: 1, content: reports },
// 	{ id: 2, content: reportsPercentage },
// ];

// const data = [
// 	{
// 		id: 1,
// 		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
// 		fName: 'walied',
// 		lName: 'sayed',
// 		status: t('Awaiting Payment'),
// 		color: '#8965742',
// 		price: 50,
// 		currency: 'SAR',
// 		date: '5/6/2021',
// 	},
// 	{
// 		id: 2,
// 		fName: 'Ahmed',
// 		lName: 'Rady',
// 		status: t('Canceled'),
// 		color: '#8965742',
// 		price: 50,
// 		currency: 'SAR',
// 		date: '5/6/2021',
// 	},
// 	{
// 		id: 3,
// 		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
// 		fName: 'walied',
// 		lName: 'sayed',
// 		status: t('Paid'),
// 		color: '#8965742',
// 		price: 50,
// 		currency: 'SAR',
// 		date: '5/6/2021',
// 	},
// 	{
// 		id: 4,
// 		fName: 'Ahmed',
// 		lName: 'Rady',
// 		status: t('Awaiting Payment'),
// 		color: '#8965742',
// 		price: 50,
// 		currency: 'SAR',
// 		date: '5/6/2021',
// 	},
// ];

// const containSelling = [
// 	{ id: 1, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
// 	{ id: 2, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
// 	{ id: 3, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
// ];

// const slidesTabs = [
// 	{ title: t('Top selling'), content: containSelling },
// 	{ title: t('Top search'), content: <p>{t('Top search')}</p> },
// 	{ title: t('Top reviews'), content: <p>{t('Top reviews')}</p> },
// ];

const basicMethod = [
	{
		title: 'general settings',
		description: 'Set your store general information',
		buttonText: 'Activate',
	},
	{
		title: 'Products',
		description: 'Add at least 1 product to your store',
		buttonText: 'Add',
	},
	{
		title: 'Inventory',
		description: 'Create at least 1 inventory to locate and manage',
		buttonText: 'Add',
	},
];
const basicIcons = {
	['general settings']: SettingsIcon,
	Products: ProductsIcon,
	Inventory: InventoryIcon,
};

const basicContain = (
	<div className='flex gap-4'>
		{basicMethod.map((item, index) => (
			<SetupCard key={index} Icon={basicIcons[item.title]} {...item} />
		))}
	</div>
);

const servicesMethod = [
	{
		title: 'shipping',
		description: 'Add shipping method for your store, so you can deliver products to your customers',
		buttonText: 'Activate',
	},
	{
		title: 'payment',
		description: 'Add payment method for your store, so your customers can pay you online',
		buttonText: 'Activate',
	},
];
const servicesIcons = {
	shipping: ShippingIcon,
	payment: PaymentIcon,
};

const servicesContain = (
	<div className='flex gap-4'>
		{servicesMethod.map((item, index) => (
			<SetupCard key={index} Icon={servicesIcons[item.title]} {...item} />
		))}
	</div>
);

const tabs = [
	{
		title: 'Basic setup',
		content: basicContain,
	},
	{
		title: 'Services setup',
		content: servicesContain,
	},
];

const slides = [
	{
		image: 'https://placehold.co/600x400',
		title: 'How to finish steps',
		description: 'Description for Card 1.',
	},
	{
		image: 'https://placehold.co/600x400',
		title: 'How to register domain',
		description: 'Description for Card 2.',
	},
	{
		image: 'https://placehold.co/600x400',
		title: 'SEO in details',
		description: 'Description for Card 3.',
	},
	{
		image: 'https://placehold.co/600x400',
		title: 'How to finish steps',
		description: 'Description for Card 4.',
	},
	{
		image: 'https://placehold.co/600x400',
		title: 'How to finish steps',
		description: 'Description for Card 5.',
	},
];

const sortMenus = [
	{ id: 1, text: 'Today' },
	{ id: 2, text: 'Last week' },
	{ id: 3, text: 'Last month' },
];

const reports = [
	{ id: 1, title: 'Visitors', value: 0 },
	{ id: 2, title: 'Product views', value: 0 },
	{ id: 3, title: 'Orders received', value: 0 },
	{ id: 4, title: 'Revenue', value: 0 },
];

const reportsPercentage = [
	{ id: 1, percentage: 4.75, positive: false, title: 'Visitors with product views', value: 0 },
	{ id: 2, percentage: 4.75, positive: true, title: 'Added to cart', value: 0 },
	{ id: 3, percentage: 4.75, positive: false, title: 'Started checkouts', value: 0 },
	{ id: 4, percentage: 4.75, positive: true, title: 'Placed orders', value: 0 },
];

const slidesContent = [
	{ id: 1, content: reports },
	{ id: 2, content: reportsPercentage },
];

const data = [
	{
		id: 1,
		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
		fName: 'walied',
		lName: 'sayed',
		status: 'Awaiting Payment',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 2,
		fName: 'Ahmed',
		lName: 'Rady',
		status: 'Canceled',
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
		status: 'Paid',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 4,
		fName: 'Ahmed',
		lName: 'Rady',
		status: 'Awaiting Payment',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
];

const containSelling = [
	{ id: 1, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
	{ id: 2, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
	{ id: 3, img: '/cloud.svg', title: 'DJI Mavic Pro 2', subtitle: 'Blankets', qty: 50, price: 10000 },
];
const slidesTabs = [
	{ title: 'Top selling', content: containSelling },
	{ title: 'Top search', content: <p>Top search</p> },
	{ title: 'Top reviews', content: <p>Top reviews</p> },
];
export { tabs, slides, sortMenus, slidesContent, data, slidesTabs };
