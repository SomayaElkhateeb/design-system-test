import {
	InventoryIcon,
	PaymentIcon,
	ProductsIcon,
	SettingsIcon,
	ShippingIcon,
} from 'src/app/utils/icons';

export interface StoreLaunchStep {
	title: string;
	description: string;
	buttonText: string;
	icon: React.ComponentType<{ className?: string }>;
	onButtonClick: () => void;
	classes?: string;
}

interface StoreLaunchSteps {
	basicSetup: StoreLaunchStep[];
	servicesSetup: StoreLaunchStep[];
}
export const storeLaunchSteps: StoreLaunchSteps = {
	basicSetup: [
		{
			title: 'general settings',
			description: 'Set your store general information',
			buttonText: 'Activate',
			icon: SettingsIcon,
			onButtonClick: () => console.log('Activate'),
			classes: 'first-step',
		},
		{
			title: 'Products',
			description: 'Add at least 1 product to your store',
			buttonText: 'Add',
			icon: ProductsIcon,
			onButtonClick: () => console.log('Add'),
			classes: 'second-step',
		},
		{
			title: 'Inventory',
			description: 'Create at least 1 inventory to locate and manage',
			buttonText: 'Add',
			icon: InventoryIcon,
			onButtonClick: () => console.log('Add'),
			classes: 'third-step',
		},
	],
	servicesSetup: [
		{
			title: 'shipping',
			description:
				'Add shipping method for your store, so you can deliver products to your customers',
			buttonText: 'Activate',
			icon: ShippingIcon,
			onButtonClick: () => console.log('Activate'),
		},
		{
			title: 'payment',
			description: 'Add payment method for your store, so your customers can pay you online',
			buttonText: 'Activate',
			icon: PaymentIcon,
			onButtonClick: () => console.log('Activate'),
		},
	],
};
