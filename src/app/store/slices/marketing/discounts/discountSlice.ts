import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from './discountsExtraReducers';
import { discountSliceModel } from 'src/app/models/discountSliceModel';

// initialState
const initialState: discountSliceModel = { discounts: [], isLoading: false, error: null };

const discountSlice = createSlice({
	name: 'discount',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getDiscountReducer(builder);
	},
});

export default discountSlice.reducer;
