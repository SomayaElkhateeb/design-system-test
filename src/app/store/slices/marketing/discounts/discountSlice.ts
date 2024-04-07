import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from './discountsExtraReducers';

// initialState
const initialState = { discount: [], isLoading: false, error: null };

const discountSlice = createSlice({
	name: 'discount',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getDiscountReducer(builder);
	},
});

export const selectDiscount = (state) => state.discount;

export default discountSlice.reducer;
