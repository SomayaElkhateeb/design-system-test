import { createSlice } from '@reduxjs/toolkit';
import { shippingListReducer } from './shippingListExtraReducers';
import { shippingListSliceModel } from 'src/app/models/settingsModels/shippingModels/shippingListModel';

const initialState: shippingListSliceModel = {
	shippingList: [],
	isLoading: false,
	error: null,
};

const shippingListsSlice = createSlice({
	name: 'shippingList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		shippingListReducer(builder);
	},
});

export default shippingListsSlice.reducer;
