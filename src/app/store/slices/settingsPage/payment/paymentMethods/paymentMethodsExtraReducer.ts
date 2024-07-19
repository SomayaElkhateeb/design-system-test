import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { taxRateSettingsSliceModel } from 'src/app/models/settingsModels/taxRateSettingsModel';
import { createPaymentMethod, getPaymentMethods, getPaymentMethodShow } from './paymentMethodsAsyncThunks';

export const taxCategoriesShowReducer = (
	builder: ActionReducerMapBuilder<taxRateSettingsSliceModel>,
) => {
	builder
		// getPaymentMethods
		.addCase(getPaymentMethods.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPaymentMethods.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesList = payload; // []
		})
		.addCase(getPaymentMethods.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// getPaymentMethodShow
		.addCase(getPaymentMethodShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getPaymentMethodShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesShow = payload.data;
		})
		.addCase(getPaymentMethodShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// createPaymentMethod
		.addCase(createPaymentMethod.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(createPaymentMethod.fulfilled, (state, { payload }) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(createPaymentMethod.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})
	

};
