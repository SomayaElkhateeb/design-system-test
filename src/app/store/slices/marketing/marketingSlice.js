import { createSlice } from '@reduxjs/toolkit';
import {
	getCouponsReducer,
	// addDiscountReducer,
} from './marketingExtraReducers';

// initialState
const initialState = { coupons: [], isLoading: false, error: null };

const couponsSlice = createSlice({
	name: 'coupons',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Chain the reducers using addCase
		getCouponsReducer(builder);
		// addDiscountReducer(builder);
	},
});

export const selectcoupons = (state) => state.coupons;

export default couponsSlice.reducer;
