import { useTranslation } from 'react-i18next';
import StepNavigator from 'src/app/components/StepNavigator/StepNavigator';
import { SubHeader } from 'src/app/components/optimized';
import { AddCheckout, Customer, OrderAddress, Products } from 'src/app/components/page';

export default function AddOrder() {
	const { t } = useTranslation();

	const tabs = [
		{
			title: t('customer'),
			content: <Customer onNext={() => console.log('Next')} />,
		},
		{
			title: t('products'),
			content: <Products onNext={() => console.log('Next')} onBack={() => console.log('Back')} />,
		},
		{
			title: t('address'),
			content: (
				<OrderAddress onNext={() => console.log('Next')} onBack={() => console.log('Back')} />
			),
		},
		{
			title: t('checkout'),
			content: (
				<AddCheckout onNext={() => console.log('Next')} onBack={() => console.log('Back')} />
			),
		},
	];

	return (
		<>
			<SubHeader title={t('add new order')} />
			<div className='custom_container mx-0 py-5 lg:w-3/4 sm:px-1'>
				<StepNavigator steps={tabs} />
			</div>
		</>
	);
}
