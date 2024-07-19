import { createSlice } from '@reduxjs/toolkit';
import { shippingListReducer } from './shippingExtraReducers';
import { shippingSliceModel } from 'src/app/models/settingsModels/shippingSettingsModel';

const initialState: shippingSliceModel = {
	shippingList: [],
	shippingMethod: [],
	isLoading: false,
	error: null,
};

const shippingSlice = createSlice({
	name: 'shippingSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		shippingListReducer(builder);
	},
});

export default shippingSlice.reducer;
