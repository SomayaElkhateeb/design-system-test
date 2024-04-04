import { createSlice } from '@reduxjs/toolkit';
import {
	getDiscountsReducer,
	// addDiscountReducer,
} from './marketingExtraReducers';

// initialState
const initialState = { discounts: [], isLoading: false, error: null };

const discountSlice = createSlice({
	name: 'discounts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Chain the reducers using addCase
		getDiscountsReducer(builder);
		// addDiscountReducer(builder);
	},
});

export const selectDiscounts = (state) => state.discounts;

export default discountSlice.reducer;
