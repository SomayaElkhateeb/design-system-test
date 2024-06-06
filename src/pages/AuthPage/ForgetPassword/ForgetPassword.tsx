import { useState, FC } from 'react';
import CheckCode from './_comp/CheckCode';
import CreateNewPassword from './_comp/CreateNewPassword';
import GetPassword from './_comp/GetPassword';
import AuthHeader from '../_comp/AuthHeader';

const ForgetPassword: FC = () => {
	const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
	const [usePhone, setUsePhone] = useState<boolean>(false);
	const [isVerified, setIsVerified] = useState<boolean>(false);

	return (
		<section className='flex flex-col space-x-4 w-full py-12 space-y-16 bg-white m-auto items-center justify-between'>
			<AuthHeader />
			<div className='w-full md:w-4/6 lg:w-5/6 p-3 flex items-center justify-between'>
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
