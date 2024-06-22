import { createSlice, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCustomersReducer } from './customersExtraReducers';

interface Customer {
	// Define the structure of a single customer object
}

interface CustomersState {
	customers: Customer[]; // Update this type to match the structure of your customers data
	isLoading: boolean;
	error: string | null;
}

const initialState: CustomersState = {
	customers: [],
	isLoading: false,
	error: null,
};

const customersSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {},
	extraReducers: (builder: ActionReducerMapBuilder<CustomersState>) => {
		getCustomersReducer(builder);
	},
});

export const selectCustomers = (state: { customers: CustomersState }) => state.customers;

export default customersSlice.reducer;
