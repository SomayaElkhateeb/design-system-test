import { createSlice } from '@reduxjs/toolkit';
import { getAllCustomerTableReducer } from './customersTableExtraReducers';
import { CustomerInterface } from 'src/app/interface/CustomerInterface';

export interface allCustomerStatus {
	allCustomer: CustomerInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: allCustomerStatus = {
	allCustomer: [
		{
			id: '1',
			name: 'mohamed Mostafa',
			first_name: 'Mohamed',
			last_name: 'Mostafa',
			mobile: '01064545565',
			city: 'mansoura',
			Orders: 10,
			email: 'mmmm@yahoo.com',
			'E-Subscription': true,
		},
	],
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

export const selectAllCustomer = (state: { allCustomer: allCustomerStatus }) => state.allCustomer;

export default allCustomerSlice.reducer;
