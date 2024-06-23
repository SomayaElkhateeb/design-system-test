import { useState } from 'react';

import UserInfo from './UserInfo';
import OtpVerification from './OtpVerification';
import Steps from 'src/pages/AuthPage/RegisterLayout/Steps';

export default function AboutYourself() {
	const [currentStep, setCurrentStep] = useState(1);
	const [phone, setPhone] = useState('');

	const handlePhoneChange = (newPhone: string) => {
		setPhone(newPhone);
	};

	const handleNext = () => {
		if (currentStep < 2) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleFinish = () => {
		alert('Finished!');
	};

	const handleResend = () => {
		// this function will make resend the OTP code to the user
		console.log(123);
	};

	return (
		<Steps
			stepsContent={[
				<UserInfo onNext={handleNext} onPhoneChange={handlePhoneChange} />,
				<OtpVerification
					onFinish={handleFinish}
					phone={phone}
					setCurrentStep={setCurrentStep}
					onResend={handleResend}
				/>,
			]}
			setCurrentStep={setCurrentStep}
			currentStep={currentStep}
		/>
	);
}
