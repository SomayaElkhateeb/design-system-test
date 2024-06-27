import { UserInfoInterface } from "src/pages/AuthPage/Registration/comp/tabs/AboutYourself/useUserInfoForm";
import MainApi from "../api/MainApi";

export const AuthApi = {
  signUp: (formData: UserInfoInterface) => {
    return MainApi.get("");
  },

};
