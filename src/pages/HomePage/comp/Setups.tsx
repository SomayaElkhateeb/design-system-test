import { useTranslation } from 'react-i18next';
import VerticalTabs from './VerticalTabsCopy';
import { LineChart, SetupCard } from 'src/app/components/optimized';
import {
	InventoryIcon,
	PaymentIcon,
	ProductsIcon,
	SettingsIcon,
	ShippingIcon,
} from 'src/app/utils/icons';
import { useState } from 'react';
const Setups = () => {
	const { t } = useTranslation();
	const basicMethod = [
		{
			title: t('general settings'),
			description: t('Set your store general information'),
			buttonText: t('Activate'),
		},
		{
			title: t('Products'),
			description: t('Add at least 1 product to your store'),
			buttonText: t('Add'),
		},
		{
			title: t('Inventory'),
			description: t('Create at least 1 inventory to locate and manage'),
			buttonText: t('Add'),
		},
	];
	const basicIcons = {
		[t('general settings')]: SettingsIcon,
		[t('Products')]: ProductsIcon,
		[t('Inventory')]: InventoryIcon,
	};
	const servicesMethod = [
		{
			title: t('shipping'),
			description: t(
				'Add shipping method for your store, so you can deliver products to your customers',
			),
			buttonText: t('Activate'),
		},
		{
			title: t('payment'),
			description: t('Add payment method for your store, so your customers can pay you online'),
			buttonText: t('Activate'),
		},
	];
	const servicesIcons = {
		[t('shipping')]: ShippingIcon,
		[t('payment')]: PaymentIcon,
	};

	const basicContain = (
		<div className='flex gap-4'>
			{basicMethod.map((item, index) => (
				<SetupCard key={index} Icon={basicIcons[item.title]} {...item} />
			))}
		</div>
	);
	const servicesContain = (
		<div className='flex gap-4'>
			{servicesMethod.map((item, index) => (
				<SetupCard key={index} Icon={servicesIcons[item.title]} {...item} />
			))}
		</div>
	);
	const tabs = [
		{
			title: t('Basic setup'),
			content: basicContain,
		},
		{
			title: t('Services setup'),
			content: servicesContain,
		},
	];

	const [isFinished, setIsFinished] = useState(false);

	const handleFinish = () => {
		setIsFinished(true);
	};

	return (
		<div>
			{isFinished ? (
				<LineChart percentage='50' />
			) : (
				<>
					<h2 className='text-title text-lg font-semibold'>{t('Get ready for your first sale')}</h2>
					<p className='text-title text-sm mb-4'>
						{t('There are only 2 main steps to launch your store')},
						<span className='btn-lin px-0 hover:bg-transparent cursor-pointer'>
							{t('Follow our tips')}
						</span>
						{t('to get started')}
					</p>
					<VerticalTabs tabs={tabs} handleFinish={handleFinish} />
				</>
			)}
		</div>
	);
};

export default Setups;
