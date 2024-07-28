import { nanoid } from 'nanoid';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { LiaTrashAlt } from 'react-icons/lia';
import { SiMicrosoftexcel } from 'react-icons/si';
import { CategoryInterface } from 'src/app/interface/CategoriesInterface';
import { AnalyticsIcon, CopyIcon, OrdersIcon } from 'src/app/utils/icons';

// Define products array with correct type
export interface Product {
	name: string;
	category: string;
	option: number;
	imageUrl: string;
	sku: string;
	id: string;
	quantity: number;
	qty: number;
	price: number;
	en: { name: string; description: string };
	ar: { name: string; description: string };
	type: string;
	images: {
		id: string;
		large_image_url: string;
		medium_image_url: string;
		original_image_url: string;
		path: string;
		small_image_url: string;
		url: string;
	}[];
	inventory_sources: {
		id: string;
		inventory_source_id: string;
		product_id: string;
		qty: number;
	}[];
	categories:string[]
}

export const initialProduct = () => {
	return {
		name: '',
		category: '',
		option: 0,
		imageUrl: '',
		sku: '',
		id: '',
		quantity: 0,
		qty: 0,
		price: 0,
		en: { name: '', description: '' },
		ar: { name: '', description: '' },
		type: '',
		images: [],
		inventory_sources:[],
		categories:[]
	};
};

export const allProducts: Product[] = [
	{
		id: '1',
		name: 'Cozy Fleece Blanket',
		category: 'Blankets',
		sku: 'BLK-001',
		option: 5,
		quantity: 50,
		price: 29.99,
		imageUrl: 'images/product.png',
	},
	{
		id: '2',
		name: 'Luxury Down Comforter',
		category: 'Bedding',
		sku: 'BED-002',
		option: 7,
		quantity: 20,
		price: 199.99,
		imageUrl: 'images/product.png',
	},
	{
		id: '3',
		name: 'Memory Foam Pillow',
		category: 'Pillows',
		sku: 'PIL-003',
		option: 3,
		quantity: 100,
		price: 49.99,
		imageUrl: 'images/product.png',
	},
];

export const productDropdownMenu = [
	{
		id: nanoid(),
		title: 'Simple Product',
		describtion: "You don't need advanced options to fill",
		shipping: true,
		to: '/products/new/simple',
	},
	{
		id: nanoid(),
		title: 'Configurable product',
		describtion: 'You need all options available',
		shipping: false,
		to: '/products/new/configurable',
	},
	// {
	// 	id: nanoid(),
	// 	title: 'Virtual Product',
	// 	describtion: 'Services, ebooks, Downloadable',
	// 	shipping: false,
	// 	to: '/products/new/virtual',
	// },
	// {
	// 	id: nanoid(),
	// 	title: 'Food',
	// 	describtion: 'Food & Drinks have special way shipping',
	// 	shipping: true,
	// 	to: '/products/new/food',
	// },
	// {
	// 	id: nanoid(),
	// 	title: 'Bundle',
	// 	describtion: 'Collection of related products',
	// 	shipping: false,
	// 	to: '/products/new/bundle',
	// },
];

export const productSortMenu = [
	{ id: nanoid(), text: 'Name A to Z' },
	{ id: nanoid(), text: 'Name Z to A' },
	// { id: nanoid(), text: 'SKU Ascending' },
	// { id: nanoid(), text: 'SKU Descending' },
	// { id: nanoid(), text: 'Price Low in first' },
	// { id: nanoid(), text: 'Price High in first' },
	// { id: nanoid(), text: 'Date Added' },
	// { id: nanoid(), text: 'Date modified' },
];

export const productActionsMenu = [
	{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
	{ id: nanoid(), text: 'Export products', icon: <SiMicrosoftexcel className='iconClass' /> },
	{ id: nanoid(), text: 'Import products', icon: <FiUploadCloud className='iconClass' /> },
	{
		id: nanoid(),
		text: 'Delete all products',
		icon: <LiaTrashAlt size='28' className='fill-error' />,
	},
];

// Define setting menus for setting button action and will be used in brands section page
export const productSettingsMenu = [
	{ id: nanoid(), text: 'Copy product link', icon: <CopyIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product report', icon: <AnalyticsIcon className='fill-subtitle' /> },
	{ id: nanoid(), text: 'Product orders', icon: <OrdersIcon className='fill-subtitle' /> },
	{
		id: nanoid(),
		text: 'Export product orders XLS',
		icon: <FiUploadCloud className='iconClass' />,
	},
	{ id: nanoid(), text: 'Delete product', icon: <LiaTrashAlt size='25' className='fill-error' /> },
];


