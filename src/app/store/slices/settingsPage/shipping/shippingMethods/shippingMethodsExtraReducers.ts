import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { getShippingMethods } from './shippingMethodsAsyncThunks';
import { shippingMethodsSliceModel } from 'src/app/models/settingsModels/shippingModels/shippingMethodsModel';

export const shippingMethodsReducer = (
	builder: ActionReducerMapBuilder<shippingMethodsSliceModel>,
) => {
	builder
		// get shipping methods
		.addCase(getShippingMethods.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getShippingMethods.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.shippingMethod = payload.data;
		})
		.addCase(getShippingMethods.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
