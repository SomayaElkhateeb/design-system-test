import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from './groupsExtraReducers';

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

export const selectdiscount = (state) => state.discount;

export default discountSlice.reducer;
