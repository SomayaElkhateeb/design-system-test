import { createSlice } from '@reduxjs/toolkit';
import { shippingMethodsReducer } from './shippingMethodsExtraReducers';
import { shippingMethodsSliceModel } from 'src/app/models/settingsModels/shippingModels/shippingMethodsModel';

const initialState: shippingMethodsSliceModel = {
	shippingMethod: [],
	isLoading: false,
	error: null,
};

const shippingMethodsSlice = createSlice({
	name: 'shippingMethod',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		shippingMethodsReducer(builder);
	},
});

export default shippingMethodsSlice.reducer;
