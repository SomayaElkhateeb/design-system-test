import { createSlice } from '@reduxjs/toolkit';

import { paymentMethodsReducer } from './paymentMethodsExtraReducer';
import { paymentMethodsSliceModel } from 'src/app/models/settingsModels/paymentMethodsSettingsModel';

const initialState: paymentMethodsSliceModel = {
	paymentList: [],
	paymentShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const paymentMethodsSlice = createSlice({
	name: 'paymentMethods',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		paymentMethodsReducer(builder);
	},
});

export default paymentMethodsSlice.reducer;
