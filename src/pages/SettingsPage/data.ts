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
import AramexIcon from 'src/app/assets/companies/aramexred.svg';
import AyMakanIcon from 'src/app/assets/companies/aymakan.svg';
import DhlIcon from 'src/app/assets/companies/dhlred.svg';
import ExpressIcon from 'src/app/assets/companies/express.svg';
import FastloIcon from 'src/app/assets/companies/fastlo.svg';
import RedboxIcon from 'src/app/assets/companies/redbox.svg';

const images = [
	{ id: 1, ImageURL: ExpressIcon },
	{ id: 2, ImageURL: AramexIcon },
	{ id: 3, ImageURL: FastloIcon },
	{ id: 4, ImageURL: AyMakanIcon },
	{ id: 5, ImageURL: RedboxIcon },
	{ id: 6, ImageURL: DhlIcon },
];

const settingsCards = [
	{
		id: 1,
		path: '/settings/general',
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
		path: '/',
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
	{ id: 7, path: '/', Icon: ReviewsIcon, title: 'Reviews', description: 'manage posted reviews' },
	{ id: 8, path: '/', Icon: QueryIcon, title: 'Queries', description: 'manage posted queries' },
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
		path: '/',
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
export { settingsCards, images, paymentProvidersData };
