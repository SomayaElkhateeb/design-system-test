import { createSlice } from '@reduxjs/toolkit';
import { getCustomerGroupTableReducer } from './customersGroupTableExtraReducers';
import { customersGroupSliceModel } from 'src/app/models/customersGroupSliceModel';

const initialState: customersGroupSliceModel = {
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

export default customerGroupSlice.reducer;
