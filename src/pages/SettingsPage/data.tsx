import { nanoid } from 'nanoid';
import { getImageUrl } from 'src/app/utils';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail, TfiWorld } from 'react-icons/tfi';

import {
	LanguageIcon,
	SettingsIcon,
	ShippingIcon,
	PaymentIcon,
	Person,
	ReviewsIcon,
	QueryIcon,
	EditIcon,
	TaxIcon,
	DomainIcon,
	InventoryIcon,
	WalletIcon,
} from 'src/app/utils/icons';

const images = [
	{ id: 1, ImageURL: getImageUrl('companies/express.svg') },
	{ id: 2, ImageURL: getImageUrl('companies/aramexred.svg') },
	{ id: 3, ImageURL: getImageUrl('companies/fastlo.svg') },
	{ id: 4, ImageURL: getImageUrl('companies/aymakan.svg') },
	{ id: 5, ImageURL: getImageUrl('companies/redbox.svg') },
	{ id: 6, ImageURL: getImageUrl('companies/dhlred.svg') },
];

const cards = [
	{
		id: nanoid(),
		image: getImageUrl('companies/express.svg'),
		name: 'SMSA',
		url: '/settings/shipping/setupProviders/smsa',
		status: 'free',
		country: 'saudi arabia',
		count: 120,
		title: 'cities',
		percentage: 'discounted rates',
		description:
			'Connect with Facebook, Instagram Shop and launch an ad campaign to show your products in front of potential customers.',
	},
	{
		id: nanoid(),
		image: getImageUrl('companies/aramexred.svg'),
		name: 'Aramex',
		url: '/',
		status: 'installed',
		country: 'saudi arabia',
		count: 120,
		title: 'cities',
		description:
			'Connect with Facebook, Instagram Shop and launch an ad campaign to show your products in front of potential customers.',
	},
	{
		id: nanoid(),
		image: getImageUrl('companies/aymakan.svg'),
		name: 'AyMakan',
		url: '/',
		status: 'free',
		country: 'saudi arabia',
		count: 120,
		title: 'cities',
		percentage: 'discounted rates',
		description:
			'Connect with Facebook, Instagram Shop and launch an ad campaign to show your products in front of potential customers.',
	},
];

const pricing = [
	{ id: nanoid(), name: 'Setup fees', price: 200 },
	{ id: nanoid(), name: 'first 15 KG', price: 15 },
	{ id: nanoid(), name: '1 KG after 15 KG', price: 20 },
];

const contact = [
	{ id: nanoid(), contact: 'Smsa.com/help-center', icon: <TfiWorld color='#8791A8' size={15} /> },
	{ id: nanoid(), contact: 'web@Smsa.com.sa', icon: <TfiEmail color='#8791A8' size={15} /> },
	{ id: nanoid(), contact: 966502456733, icon: <FiPhoneCall color='#8791A8' size={15} /> },
];

const smsa = [
	{
		id: nanoid(),
		title: 'Grow your reach',
		description:
			'Advertise and sell your products directly through your Facebook page and reach billions of potential customers.',
	},
	{
		id: nanoid(),
		title: 'Increase your revenue',
		description: 'Merchants see an average increase of 15% in revenue when selling on Facebook.',
	},
	{
		id: nanoid(),
		title: 'Easy checkout',
		description:
			'With Facebook Shop, your customers will be able to easily browse products on mobile and checkout on any device.',
	},
];
const settingsCards = [
	{
		id: 1,
		path: 'general',
		Icon: SettingsIcon,
		title: 'General settings',
		description: 'e.g., store name, logo, address...',
	},
	{
		id: 2,
		path: 'shipping',
		Icon: ShippingIcon,
		title: 'Shipping',
		description: 'Integration with shipping companies',
	},
	{
		id: 3,
		path: 'payment',
		Icon: PaymentIcon,
		title: 'Payment',
		description: 'Enable and integration payment gateways',
	},
	{
		id: 4,
		path: 'language',
		Icon: LanguageIcon,
		title: 'Languages & defaults',
		description: 'Setup store language, currency, geo zones',
	},
	{
		id: 5,
		path: 'branches',
		Icon: InventoryIcon,
		title: 'Branches',
		description: 'Manage places you stock inventory, and sell products.',
	},
	{
		id: 6,
		path: 'users',
		Icon: Person,
		title: 'Users & Permissions',
		description: 'Users Settings',
	},
	{
		id: 7,
		path: 'reviews',
		Icon: ReviewsIcon,
		title: 'Reviews',
		description: 'manage posted reviews',
	},
	{
		id: 8,
		path: 'queries',
		Icon: QueryIcon,
		title: 'Queries',
		description: 'manage posted queries',
	},
	{
		id: 9,
		path: '/',
		Icon: EditIcon,
		title: 'Customizations',
		description: 'Customize checkout, products and orders options',
	},
	{ id: 10, path: '/', Icon: TaxIcon, title: 'Taxes', description: 'Taxes rate & Classes' },
	{
		id: 11,
		path: 'billing',
		Icon: WalletIcon,
		title: 'Billing & plans',
		description: 'Manage and pay your bills',
	},
	{ id: 12, path: '/', Icon: DomainIcon, title: 'Domains', description: 'Setup store domains' },
	{
		id: 13,
		path: '/',
		Icon: ReviewsIcon,
		title: 'E-Mail Notifications',
		description: 'manage notifications sent to users',
	},
];
const paymentProvidersData = [
	{
		provider: { name: 'payTabs', url: '/payTabs' },
		monthlyFees: { planOne: '', planTwo: '' },
		setupFees: { planOne: 938, planTwo: '' },
		creditTransactions: {
			paymentCards: ['visa', 'amex', 'masterCard'],
			local: {
				flatFee: 1,
				percentageFee: 2.7,
			},
			global: {
				flatFee: 1,
				percentageFee: 2.7,
			},
		},
		methodsTransactions: [
			{
				method: 'mada',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'stcPay',
				fee: {
					flatFee: 1,
					percentageFee: 1.7,
				},
			},
			{
				method: 'apple',
				fee: {
					flatFee: '',
					percentageFee: 1.7,
				},
			},
			{
				method: 'knet',
				fee: {
					flatFee: 1,
					percentageFee: '',
				},
			},
			{
				method: 'amex',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'visa',
				fee: {
					flatFee: 1,
					percentageFee: 1.45,
				},
			},
			{ method: 'masterCard', fee: 2.1 },
		],
		banks: ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'],
	},
	{
		provider: { name: 'moyasar', url: '/moyasar' },
		monthlyFees: { planOne: 200, planTwo: '' },
		setupFees: { planOne: 1000, planTwo: '' },
		creditTransactions: {
			paymentCards: ['visa', 'amex', 'masterCard'],
			local: {
				flatFee: 1,
				percentageFee: 2.7,
			},
			global: {
				flatFee: 1,
				percentageFee: 2.7,
			},
		},
		methodsTransactions: [
			{
				method: 'mada',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'stcPay',
				fee: {
					flatFee: 1,
					percentageFee: 1.7,
				},
			},
			{
				method: 'apple',
				fee: {
					flatFee: '',
					percentageFee: 1.7,
				},
			},
			{
				method: 'knet',
				fee: {
					flatFee: 1,
					percentageFee: '',
				},
			},
			{
				method: 'amex',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'visa',
				fee: {
					flatFee: 1,
					percentageFee: 1.45,
				},
			},
			{ method: 'masterCard', fee: 2.1 },
		],
		banks: ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'],
	},
	{
		provider: { name: 'hyperPay', url: '/hyperPay' },
		monthlyFees: { planOne: '', planTwo: 500 },
		setupFees: { planOne: '', planTwo: 5000 },
		creditTransactions: {
			paymentCards: ['visa', 'amex', 'masterCard'],
			local: {
				flatFee: 1,
				percentageFee: 2.7,
			},
			global: {
				flatFee: 1,
				percentageFee: 2.7,
			},
		},
		methodsTransactions: [
			{
				method: 'mada',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'stcPay',
				fee: {
					flatFee: 1,
					percentageFee: 1.7,
				},
			},
			{
				method: 'apple',
				fee: {
					flatFee: '',
					percentageFee: 1.7,
				},
			},
			{
				method: 'knet',
				fee: {
					flatFee: 1,
					percentageFee: '',
				},
			},
			{
				method: 'amex',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'visa',
				fee: {
					flatFee: 1,
					percentageFee: 1.45,
				},
			},
			{ method: 'masterCard', fee: 2.1 },
		],
		banks: ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'],
	},
	{
		provider: { name: 'amazonServices', url: '/amazonServices' },
		monthlyFees: { planOne: 200, planTwo: 400 },
		setupFees: { planOne: '', planTwo: 1500 },
		creditTransactions: {
			paymentCards: ['visa', 'amex', 'masterCard'],
			local: {
				flatFee: 1,
				percentageFee: 2.7,
			},
			global: {
				flatFee: 1,
				percentageFee: 2.7,
			},
		},
		methodsTransactions: [
			{
				method: 'mada',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'stcPay',
				fee: {
					flatFee: 1,
					percentageFee: 1.7,
				},
			},
			{
				method: 'apple',
				fee: {
					flatFee: '',
					percentageFee: 1.7,
				},
			},
			{
				method: 'knet',
				fee: {
					flatFee: 1,
					percentageFee: '',
				},
			},
			{
				method: 'amex',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'visa',
				fee: {
					flatFee: 1,
					percentageFee: 1.45,
				},
			},
			{ method: 'masterCard', fee: 2.1 },
		],
		banks: ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'],
	},
	{
		provider: { name: 'checkout', url: '/checkout' },
		monthlyFees: { planOne: '', planTwo: '' },
		setupFees: { planOne: '', planTwo: '' },
		creditTransactions: {
			paymentCards: ['visa', 'amex', 'masterCard'],
			local: {
				flatFee: 1,
				percentageFee: 2.7,
			},
			global: {
				flatFee: 1,
				percentageFee: 2.7,
			},
		},
		methodsTransactions: [
			{
				method: 'mada',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'stcPay',
				fee: {
					flatFee: 1,
					percentageFee: 1.7,
				},
			},
			{
				method: 'apple',
				fee: {
					flatFee: '',
					percentageFee: 1.7,
				},
			},
			{
				method: 'knet',
				fee: {
					flatFee: 1,
					percentageFee: '',
				},
			},
			{
				method: 'amex',
				fee: {
					flatFee: '',
					percentageFee: '',
				},
			},
			{
				method: 'visa',
				fee: {
					flatFee: 1,
					percentageFee: 1.45,
				},
			},
			{ method: 'masterCard', fee: 2.1 },
		],
		banks: ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'],
	},
];
export { settingsCards, images, cards, pricing, contact, smsa, paymentProvidersData };
