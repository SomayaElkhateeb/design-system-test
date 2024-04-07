import { createSlice } from '@reduxjs/toolkit';
import { getCouponsReducer } from './couponsExtraReducers';

interface Coupon {
	id: string;
	name: string;
	value: number;
	date: string;
	sales: number;
	used: number;
}

interface CouponsState {
	coupons: Coupon[];
	isLoading: boolean;
	error: string | null;
}

const initialState: CouponsState = { coupons: [], isLoading: false, error: null };

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
