import { useState } from 'react';
import Steps from 'src/app/components/optimized/UiKits/Steps';
import { getImageUrl } from 'src/app/utils';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';

const AboutYourself = () => {
	const [login, setLogin] = useState(false);
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

const LoginStep = ({ setLogin }) => {
	return (
		<section className='flex justify-between w-full'>
			<div className='flex flex-col bg-gray-100 p-4 py-8 w-3/6'>
				<button
					className='w-full max-w-xs py-2 mb-4 text-white bg-primary rounded-md'
					onClick={() => setLogin(true)}
				>
					Continue With Email
				</button>
				<div className='flex items-center w-full max-w-xs my-4'>
					<div className='flex-grow border-t border-gray-300'></div>
					<span className='mx-2 text-gray-500'>OR</span>
					<div className='flex-grow border-t border-gray-300'></div>
				</div>
				<button className='flex items-center w-full max-w-xs px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md'>
					<img
						src='https://www.google.com/images/icons/product/search-32.gif'
						alt='Google Icon'
						className='w-5 h-5 mr-2'
					/>
					Continue with Google
				</button>
				<button className='flex items-center w-full max-w-xs px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-300 rounded-md'>
					<img
						src='https://www.facebook.com/images/fb_icon_325x325.png'
						alt='Facebook Icon'
						className='w-5 h-5 mr-2'
					/>
					Continue with Facebook
				</button>
				<div className='text-gray-700'>
					Already have an account?{' '}
					<a href='login' className='text-blue-600'>
						Sign In
					</a>
				</div>
			</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_1.svg')} alt='' />;
			</div>
		</section>
	);
};
