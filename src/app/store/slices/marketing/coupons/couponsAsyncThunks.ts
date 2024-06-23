import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Coupon } from 'src/app/interface/CouponInterface';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';
const URL = 'http://localhost:3007';

// get coupons
// export const getCoupons = createAsyncThunk<Coupon[]>('coupon/getCoupons', async (_, thunkAPI) => {
// 	const { rejectWithValue } = thunkAPI;
// 	try {
// 		const { data } = await axios.get<Coupon[]>(`${URL}/coupons`);
// 		return data;
// 	} catch (error) {
// 		throw rejectWithValue(error.message);
// 	}
// });
export const getCoupons = createAsyncThunk(
	"coupon/getCoupons",
	() =>PublicRequest.getData("coupons")
);
// export const ResendCode = createAsyncThunk(
// 	"updateProfile/UpdateAccount",
// 	(payload: { mobile: string | undefined; id?: string }) =>
// 	  PublicRequest.postData(payload, "resend/otp")
//   );

// add coupons
export const postCoupons = createAsyncThunk<any, any>(
	'coupon/postCoupons',
	async (couponData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.post<any>(`${URL}/coupons`, couponData);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);

// update coupons
export const updateCoupon = createAsyncThunk<any[], any>(
	'coupon/updateCoupon',
	async (requestData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const { data } = await axios.put<any[]>(
				`${URL}/coupons/${requestData.couponsId}`,
				requestData.updatedData,
			);
			return data;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);

// delete Coupons
export const deleteCoupons = createAsyncThunk<any[], any>(
	'coupons/deleteCoupons',
	async (id, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			await axios.delete<any[]>(`${URL}/coupons/${id}`);
			return id;
		} catch (error) {
			throw rejectWithValue(error.message);
		}
	},
);
