import {
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
import { TfiWorld } from 'react-icons/tfi';

const settingsCards = [
	{
		id: 1,
		to: 'generalSettings',
		Icon: SettingsIcon,
		title: 'General settings',
		description: 'e.g., store name, logo, address...',
	},
	{
		id: 2,
		to: '/',
		Icon: ShippingIcon,
		title: 'Shipping',
		description: 'Integration with shipping companies',
	},
	{
		id: 3,
		to: '/',
		Icon: PaymentIcon,
		title: 'Payment',
		description: 'Enable and integration payment gateways',
	},
	{
		id: 4,
		to: '/',
		Icon: TfiWorld,
		title: 'Languages & defaults',
		description: 'Setup store language, currency, geo zones',
	},
	{
		id: 5,
		to: '/',
		Icon: InventoryIcon,
		title: 'Branches',
		description: 'Manage places you stock inventory, and sell products.',
	},
	{
		id: 6,
		to: 'users',
		Icon: Person,
		title: 'Users & Permissions',
		description: 'Users Settings',
	},
	{ id: 7, to: '/', Icon: ReviewsIcon, title: 'Reviews', description: 'manage posted reviews' },
	{ id: 8, to: '/', Icon: QueryIcon, title: 'Queries', description: 'manage posted queries' },
	{
		id: 9,
		to: '/',
		Icon: EditIcon,
		title: 'Customizations',
		description: 'Customize checkout, products and orders options',
	},
	{ id: 10, to: '/', Icon: TaxIcon, title: 'Taxes', description: 'Taxes rate & Classes' },
	{
		id: 11,
		to: '/',
		Icon: WalletIcon,
		title: 'Billing & plans',
		description: 'Manage and pay your bills',
	},
	{ id: 12, to: '/', Icon: DomainIcon, title: 'Domains', description: 'Setup store domains' },
	{
		id: 13,
		to: '/',
		Icon: ReviewsIcon,
		title: 'E-Mail Notifications',
		description: 'manage notifications sent to users',
	},
];

export { settingsCards };
