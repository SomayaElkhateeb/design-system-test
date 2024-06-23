import { createSlice } from '@reduxjs/toolkit';
import { getAllCustomerTableReducer } from './customersTableExtraReducers';
import { allCustomerSliceModel } from 'src/app/models/allCustomerSliceModel';

const initialState: allCustomerSliceModel = {
	allCustomer: [],
	isLoading: false,
	error: null,
};

const allCustomerSlice = createSlice({
	name: 'allCustomer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllCustomerTableReducer(builder);
	},
});

// export const selectAllCustomer = (state: { allCustomer: allCustomerStatus }) => state.allCustomer;

export default allCustomerSlice.reducer;
