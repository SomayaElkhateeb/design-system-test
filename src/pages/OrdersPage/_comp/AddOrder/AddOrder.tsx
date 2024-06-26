import { useTranslation } from 'react-i18next';
import StepNavigator from 'src/app/components/StepNavigator/StepNavigator';
import useStepNavigator from 'src/app/components/StepNavigator/useStepNavigator';
import { SubHeader } from 'src/app/components/optimized';
import { AddCheckout, Customer, OrderAddress, Products } from 'src/app/components/page';

export default function AddOrder() {
	const { t } = useTranslation();

	const { goNext, goPrevious, activeStep, setActiveStep } = useStepNavigator();

	const handleFinish = () => {
		console.log('Finish');
		// Implement additional finish logic here
	};

	const tabs = [
		{
			title: t('customer'),
			content: <Customer onNext={goNext} />,
		},
		{
			title: t('products'),
			content: <Products onNext={goNext} onBack={goPrevious} />,
		},
		{
			title: t('address'),
			content: <OrderAddress onNext={goNext} onBack={goPrevious} />,
		},
		{
			title: t('checkout'),
			content: <AddCheckout onFinish={handleFinish} onBack={goPrevious} />,
		},
	];

	return (
		<>
			<SubHeader title={t('add new order')} />
			<div className='custom_container mx-0 py-5 lg:w-3/4 sm:px-1'>
				<StepNavigator steps={tabs} activeStep={activeStep} setActiveStep={setActiveStep} />
			</div>
		</>
	);
}
