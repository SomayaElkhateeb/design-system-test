import { UserInfoInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourself/_comp/_hook/useUserInfoForm';

import MainApi from '../api/MainApi';
import { OtpVerificationInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourself/_comp/_hook/UseOtpHook';

export const AuthApi = {
	signUp: (formData: UserInfoInterface) => {
		return MainApi.postForm('merchant/register/validate/step-one', formData);
	},
	verify_otp: (formData: OtpVerificationInterface) => {
		return MainApi.postForm('merchant/register/verify/mobile', formData);
	},

};
