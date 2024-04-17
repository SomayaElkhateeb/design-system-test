import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from './discountsExtraReducers';
import { DiscountInterface } from 'src/app/interface/DiscountInterface';


export interface DiscountState {
	discounts: DiscountInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}
// initialState
const initialState: DiscountState = { discounts: [{ id: "1", name: "medo", value: 10, date: "22/1/2022", sales: 10, active: false }], isLoading: false, error: null };

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
