import { createSlice } from '@reduxjs/toolkit';
import { getCouponsReducer } from './couponsExtraReducers';
import { Coupon } from 'src/app/interface/CouponInterface';



export interface CouponsState {
	coupons: Coupon[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: CouponsState = { coupons: [{ id: "1", name: "medo", value: 10, date: "22/1/2022", sales: 10, used: 2, active: false }], isLoading: false, error: null };

const couponsSlice = createSlice({
	name: 'coupons',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCouponsReducer(builder);
	},
});

export const selectCoupons = (state: { coupons: CouponsState }) => state.coupons;

export default couponsSlice.reducer;
