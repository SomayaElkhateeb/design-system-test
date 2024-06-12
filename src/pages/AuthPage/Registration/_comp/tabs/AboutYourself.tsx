import { useState } from 'react';
import Steps from 'src/app/components/optimized/UiKits/Steps';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import { Button } from 'src/app/components/optimized';
import { FacebookIcon, GoogleIcon } from 'src/app/utils/icons';
import { Link } from 'react-router-dom';

const AboutYourself = () => {
	const [login, setLogin] = useState<boolean>(false);
	return <div>{!login ? <LoginStep setLogin={setLogin} /> : <CreateStore />}</div>;
};

export default AboutYourself;

const CreateStore = () => {
	const [currentStep, setCurrentStep] = useState(1);

	const handleNext = () => {
		if (currentStep < 2) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleFinish = () => {
		alert('Finished!');
	};

	return (
		<div>
			<Steps
				stepsContent={[
					<StepOne onNext={handleNext} />,
					<StepTwo onBack={handleBack} onFinish={handleFinish} />,
				]}
				onNext={handleNext}
				onBack={handleBack}
				onFinish={handleFinish}
				currentStep={currentStep}
			/>
		</div>
	);
};

const LoginStep = ({ setLogin }: { setLogin: (value: boolean) => void }) => {
	const handleEmailLogin = () => setLogin(true);
	return (
		<section className='grid w-full gap-5 grid-cols-1'>
			<Button variant={'primary'} onClick={handleEmailLogin} text='Continue With Email' />
			<span className='relative flex items-center justify-center h-10'>
				<span className='absolute left-[15%] w-[70%] h-px bg-borders-lines'></span>
				<span className='relative px-5 bg-white paragraph text-subtitle'>OR</span>
			</span>
			<Button variant={'secondary'} text='Continue with Google' LeftIcon={GoogleIcon} />
			<Button variant={'secondary'} text='continue with Facebook' LeftIcon={FacebookIcon} />
			<p className='paragraph text-subtitle flex justify-center'>
				Already have an account?&nbsp;
				<Link to='/login' className='text-primary font-semibold'>
					Sign In
				</Link>
			</p>
		</section>
	);
};
