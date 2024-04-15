import { SetupCard } from 'src/app/components/optimized';
import { InventoryIcon, PaymentIcon, ProductsIcon, SettingsIcon, ShippingIcon } from 'src/app/utils/icons';

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

export { tabs };
