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
		path: '/',
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

export { settingsCards, images };
