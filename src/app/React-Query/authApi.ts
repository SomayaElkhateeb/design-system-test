import { UserInfoInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourself/_comp/_hook/useUserInfoForm';
import { OtpVerificationInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourself/_comp/_hook/UseOtpHook';
import { AboutYourBusinessInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourBusiness/_hook/useAboutYourBusiness';
import MainApi from '../api/MainApi';
import { passwordSchemaForm } from 'src/pages/AuthPage/Login/_comp/PasswordForm/usePasswordForm';
import axios from 'axios';

export const AuthApi = {
	signUp: (formData: UserInfoInterface) => {
		return axios.postForm(
			'https://my.dookan.net/api/v1/merchant/register/validate/step-one',
			formData,
		);
	},
	verify_otp: (formData: OtpVerificationInterface) => {
		return axios.postForm('https://my.dookan.net/api/v1/merchant/register/verify/mobile', formData);
	},
	send_code: (formData: OtpVerificationInterface) => {
		return axios.postForm(
			'https://my.dookan.net/api/v1/merchant/register/verify/mobile/send-code',
			formData,
		);
	},
	signUp_secondStep: (formData: AboutYourBusinessInterface) => {
		return axios.postForm(
			'https://my.dookan.net/api/v1/merchant/register/validate/step-tow',
			formData,
		);
	},
	login: (formData: passwordSchemaForm) => {
		return MainApi.postForm('merchant/login', formData);
	},

	logout: () => {
		return MainApi.delete('admin/logout');
	},
};
