import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getImageUrl } from 'src/app/utils';
import AuthForm from './_comp/AuthForm';
import PasswordForm from './_comp/PasswordForm';

const LoginPage: React.FC = () => {
	const [step, setStep] = useState(1);
	const [usePhone, setUsePhone] = useState(false);
	const { t } = useTranslation();

	const handleToggle = () => setUsePhone(!usePhone);

	return (
		<section className='flex flex-col space-x-4 w-full py-12 space-y-16 bg-white m-auto items-center'>
			<div className='flex justify-between items-center w-4/5'>
				<img src={getImageUrl('brand/en-light.svg')} alt='Brand' />
				<button className='text-xl font-semibold'>{t('العربية')}</button>
			</div>
			<div className='flex justify-between items-center w-4/5 mt-12'>
				<div className='w-2/5'>
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
				<div className='w-2/5 flex items-center justify-center'>
					<img src={getImageUrl('images/register_3.svg')} alt='Illustration' />
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
