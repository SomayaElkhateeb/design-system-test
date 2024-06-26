import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCoupons = createAsyncThunk('coupon/getCoupons', () =>
	PublicRequest.getData('coupons'),
);
// export const ResendCode = createAsyncThunk(
// 	"updateProfile/UpdateAccount",
// 	(payload: { mobile: string | undefined; id?: string }) =>
// 	  PublicRequest.postData(payload, "resend/otp")
//   );
