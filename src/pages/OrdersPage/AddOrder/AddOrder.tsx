import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader, TabX } from 'src/app/components/optimized';
import { AddCheckout, Customer, OrderAddress, Products } from 'src/app/components/page';

export default function AddOrder() {
	const { t } = useTranslation();

	const [currentTab, setCurrentTab] = useState(0);
	const [_, setFinish] = useState(false);

	const tabs = [
		{
			title: t('customer'),
			content: <Customer />,
		},
		{
			title: t('products'),
			content: <Products />,
		},
		{
			title: t('address'),
			content: <OrderAddress />,
		},
		{
			title: t('checkout'),
			content: <AddCheckout />,
		},
	];
	const handleTabClick = (index: number) => {
		setCurrentTab(index);
	};

	const handleNext = () => {
		if (currentTab < tabs.length - 1) {
			setCurrentTab(currentTab + 1);
		}
	};

	const handlePrev = () => {
		if (currentTab > 0) {
			setCurrentTab(currentTab - 1);
		}
	};

	const handleFinish = (value: boolean) => {
		setFinish(value);
	};

	return (
		<>
			<SubHeader title={t('add new order')} />
			<div className='custom_container mx-0 py-5 lg:w-3/4 sm:px-1'>
				<TabX
					tabs={tabs}
					currentTab={currentTab}
					handleNext={handleNext}
					handlePrev={handlePrev}
					handleFinish={handleFinish}
					handleTabClick={handleTabClick}
				/>
			</div>
		</>
	);
}
