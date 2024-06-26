import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { Button, SetupCard } from 'src/app/components/optimized';

import { basicSetup, servicesSetup } from './HomeConstants';
import StepNavigator from 'src/app/components/optimized/Tabs/StepNavigator';

interface SetupsProps {
	startTour: () => void;
	handleSetup: () => void;
}
// Setups Parent Component
export default function Setups({ startTour, handleSetup }: SetupsProps) {
	const { t } = useTranslation();

	const [activeStep, setActiveStep] = useState(0);

	const goNext = useCallback(() => {
		setActiveStep((prevStep) => prevStep + 1);
	}, []);

	const handleFinish = () => {
		console.log('Finish');
		handleSetup();
		// Implement additional finish logic here
	};
	// 
	const tabs = [
		{
			title: t('Basic setup'),
			content: <BasicSetup onNext={goNext} />,
		},
		{
			title: t('Services setup'),
			content: <ServicesSetup onFinish={handleFinish}/>,
		},
	];
	return (
		<section className='grid gap-3'>
			<SetupsHeader startTour={startTour} />
			<StepNavigator steps={tabs} activeStep={activeStep} setActiveStep={setActiveStep} />
		</section>
	);
}

// ------------------
// Wrapper Component.
// ------------------

function BasicSetup({ onNext }: { onNext: () => void }) {

	const [completedSteps, setCompletedSteps] = useState({
		generalSettings: false,
		addProducts: false,
		createInventory: false,
	});

	const handleStepCompletion = (id: any) => {
		setCompletedSteps((prevState) => {
			const newState = { ...prevState, [id]: true };
			if (Object.values(newState).every((step) => step)) {
				onNext();
			}
			return newState;
		});
	};
	
	return (
		<div className='flex flex-col lg:flex-row gap-4'>
			{basicSetup.map(({ id, ...item }) => (
				<SetupCard key={id} {...item} onButtonClick={() => handleStepCompletion(id)} />
			))}
		</div>
	);
}
//
function ServicesSetup({ onFinish }: { onFinish: () => void }) {
	const [completedSteps, setCompletedSteps] = useState({
		addShipping: false,
		addPayment: false,
	});

	const handleStepCompletion = (id: any) => {
		setCompletedSteps((prevState) => {
			const newState = { ...prevState, [id]: true };
			if (Object.values(newState).every((step) => step)) {
				onFinish();
			}
			return newState;
		});
	};

	return (
		<div className='flex flex-col lg:flex-row gap-4 bg-gray'>
			{servicesSetup.map(({ id, ...item }) => (
				<SetupCard key={id} {...item} onButtonClick={() => handleStepCompletion(id)} />
			))}
		</div>
	);
}

// -----------------
// Header Component.
// -----------------
function SetupsHeader({ startTour }: { startTour: () => void }) {
	const { t } = useTranslation();
	return (
		<div className='flex-col gap-1'>
			<h2 className='title'>{t('Get ready for your first sale')}</h2>
			<div className='flex flex-wrap items-center'>
				<p className='subheading '>
					{t('There are only 2 main steps to launch your store')},&nbsp;
				</p>
				<Button onClick={startTour} variant='link' className='text-sm'>
					{t('Follow our tips')}
				</Button>
				&nbsp;
				<p className='subheading'>{t('to get started')}</p>
			</div>
		</div>
	);
}
