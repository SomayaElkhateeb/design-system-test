import { createSlice } from '@reduxjs/toolkit';
import { getDiscountReducer } from '../discounts/discountsExtraReducers';

// initialState
const initialState = { customers: [], isLoading: false, error: null };

const customersSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getDiscountReducer(builder);
	},
});

export const selectCustomers = (state) => state.customers;

export default customersSlice.reducer;
