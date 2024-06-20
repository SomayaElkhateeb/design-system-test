import { clearToken } from '@/store/authSlice';
import { useAppDispatch } from '@/store/store';
import { t } from 'i18next';
import { toast } from 'react-hot-toast';
// import { Navigate  } from "react-router-dom";

export default class PublicHandelingErrors {
	public static onErrorResponse = (
		error: unknown | any,
		variables?: { contact?: string | undefined; rating?: number | null } | any,
	) => {
		this.handleTokenExpire(error?.response?.status);

		if (error?.response?.data?.errors?.length > 0) {
			error?.response?.data?.errors?.forEach((item: any) => {
				toast.error(item?.message);
			});
			this.handleTokenExpire(error?.response?.status);
		} else if (
			error?.response?.data?.errors &&
			Object.values(error?.response?.data?.errors)?.length > 0
		) {
			Object.values(error?.response?.data?.errors)?.map((e) => {
				toast.error(e);
			});
		} else if (error?.response?.data?.message) {
			toast.error(error?.response?.data?.message);
			this.handleTokenExpire(error?.response?.status);
		} else if (error?.response?.data?.error) {
			toast.error(error?.response?.data?.error);
			this.handleTokenExpire(error?.response?.status);
		} else if (error?.response?.data?.errors?.message) {
			toast.error(error?.response?.data?.errors?.message);
		}
	};

	public static handleTokenExpire = (status: number) => {
		if (status === 401) {
			if (window?.localStorage.getItem('token')) {
				toast.error(t('Your token has been expired. Please sign in again'));
				// Navigate;
				// dispatch(clearToken());
				localStorage.clear();
				window.location.href = '/login';
			}
		}
	};
}
