import { useState, FC } from 'react';
import { getImageUrl } from 'src/app/utils';
import { useTranslation } from 'react-i18next';
import CheckCode from './_comp/CheckCode';
import CreateNewPassword from './_comp/CreateNewPassword';
import GetPassword from './_comp/GetPassword';

const ForgetPassword: FC = () => {
	const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
	const [usePhone, setUsePhone] = useState<boolean>(false);
	const [isVerified, setIsVerified] = useState<boolean>(false);

	const { t } = useTranslation();

	return (
		<section className='flex flex-col w-full py-12 space-y-16 bg-white m-auto items-center'>
			<div className='flex justify-between items-center w-4/5'>
				<img src={getImageUrl('brand/en-light.svg')} alt='Brand Logo' />
				<button className='text-xl font-semibold'>{t('العربية')}</button>
			</div>
			<div className='w-4/5'>
				{!isCodeSent ? (
					<GetPassword
						setIsCodeSent={setIsCodeSent}
						setUsePhone={setUsePhone}
						usePhone={usePhone}
					/>
				) : isVerified ? (
					<CreateNewPassword />
				) : (
					<CheckCode usePhone={usePhone} setIsVerified={setIsVerified} />
				)}
			</div>
		</section>
	);
};

export default ForgetPassword;
