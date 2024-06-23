import { createSlice } from '@reduxjs/toolkit';
import { getAllOrdersTableReducer } from './allOrdersExtraReducers';
import { allOrdersSliceModel } from 'src/app/models/allOrdersPageSliceModel';

const initialState: allOrdersSliceModel = {
	allOrders: [],
	isLoading: false,
	error: null,
};

const allOrdersSlice = createSlice({
	name: 'allOrders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getAllOrdersTableReducer(builder);
	},
});

export default allOrdersSlice.reducer;
