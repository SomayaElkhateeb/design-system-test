import { UserInfoInterface } from 'src/pages/AuthPage/Registration/_tabs/AboutYourself/_comp/useUserInfoForm';

import MainApi from '../api/MainApi';

export const AuthApi = {
	signUp: (formData: UserInfoInterface) => {
		return MainApi.get('');
	},
};
