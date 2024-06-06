import { useState } from 'react';
import AuthForm from './_comp/AuthForm';
import PasswordForm from './_comp/PasswordForm';
import AuthHeader from '../_comp/AuthHeader';
import AuthImage from '../_comp/AuthImage';

const LoginPage: React.FC = () => {
	const [step, setStep] = useState(1);
	const [usePhone, setUsePhone] = useState(false);

	const handleToggle = () => setUsePhone(!usePhone);

	return (
		<section className='flex flex-col space-x-4 w-full py-12 space-y-16 bg-white m-auto items-center'>
			<AuthHeader />
			<div className='flex flex-col items-center justify-between w-4/5 mt-12 lg:flex-row lg:mt-0'>
				<div className='w-full  md:w-4/5 lg:w-2/5'>
					{step === 1 ? (
						<AuthForm
							setStep={setStep}
							handleToggle={handleToggle}
							type={usePhone ? 'phone' : 'email'}
						/>
					) : (
						<PasswordForm />
					)}
				</div>
				<AuthImage path='images/register_3.svg' />
			</div>
		</section>
	);
};

export default LoginPage;
