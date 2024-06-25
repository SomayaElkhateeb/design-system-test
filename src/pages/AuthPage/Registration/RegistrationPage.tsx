import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginOptions } from './comp/LoginOptions';
import AboutYourself from './comp/tabs/AboutYourself/AboutYourself';
import RegisterLayout from '../RegisterLayout/RegisterLayout';
import AboutYourBusiness from './comp/tabs/AboutYourBusiness/AboutYourBusiness';
import StepNavigator from 'src/app/components/optimized/Tabs/StepNavigator';

export default function RegistrationPage() {
	const { t } = useTranslation();
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [activeStep, setActiveStep] = useState(0);

	const goNext = useCallback(() => {
		setActiveStep((prevStep) => prevStep + 1);
	}, []);

	// const goPrevious = useCallback(() => {
	// 	setActiveStep((prevStep) => prevStep - 1);
	// }, []);

	const handleFinish = () => {
		console.log('Finish');
		// Implement additional finish logic here
	};

	const firstTab = isLogin ? (
		<AboutYourself onVerify={goNext} />
	) : (
		<LoginOptions setLogin={setIsLogin} />
	);

	const tabs = [
		{ title: t('Tell us about yourself'), content: firstTab },
		{ title: t('Tell us about your business'), content: <AboutYourBusiness onFinish={handleFinish}/> },
	];

	return (
		<RegisterLayout>
			<div className='flex-col-global gap-7 h-full w-full'>
				<h2 className='title md:text-[1.375rem]'>{t('Create your online store in two steps')}</h2>
				<StepNavigator steps={tabs} activeStep={activeStep} setActiveStep={setActiveStep} />
			</div>
		</RegisterLayout>
	);
}
