import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from './discountsExtraReducers';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';

export interface DiscountState {
	discounts: DiscountInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}
// initialState
const initialState: DiscountState = { discounts: [], isLoading: false, error: null };

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
