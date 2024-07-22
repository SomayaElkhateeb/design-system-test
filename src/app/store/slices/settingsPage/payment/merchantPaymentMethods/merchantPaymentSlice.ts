import { createSlice } from '@reduxjs/toolkit';
import { merchantPaymentMethodsReducer } from './merchantPaymentExtraReducer';
import { merchantPaymentMethodsSliceModel } from 'src/app/models/settingsModels/merchantPaymentMethodsSettingsModel';

const initialState: merchantPaymentMethodsSliceModel = {
	merchantPaymentList: [],
	merchantPaymentShow: null,
	isLoadingDelete:false,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const merchantPaymentSlice = createSlice({
	name: 'merchantPaymentSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		merchantPaymentMethodsReducer(builder);
	},
});

export default merchantPaymentSlice.reducer;
