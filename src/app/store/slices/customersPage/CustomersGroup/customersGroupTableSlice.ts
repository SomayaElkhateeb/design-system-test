import { createSlice } from '@reduxjs/toolkit';
import { getCustomerGroupTableReducer } from './customersGroupTableExtraReducers';
import { CustomerGroupInterface } from 'src/app/interface/CustomerGroupInterface';

export interface customerGroupStatus {
	customersGroup: CustomerGroupInterface[];
	isLoading: boolean;
	error: string | null | unknown;
}

const initialState: customerGroupStatus = {
	customersGroup: [
		{
			id: '1',
			name: 'group1',
			customerNumber: 45,
			describtion: 'high group',
			active: true,
		},
	],
	isLoading: false,
	error: null,
};

const customerGroupSlice = createSlice({
	name: 'customersGroup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getCustomerGroupTableReducer(builder);
	},
});

export const selectCustomerAnalytics = (state: { customersGroup: customerGroupStatus }) =>
	state.customersGroup;

export default customerGroupSlice.reducer;
