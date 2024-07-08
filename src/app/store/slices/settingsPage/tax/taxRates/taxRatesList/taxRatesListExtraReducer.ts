import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getTaxRatesList } from './taxRatesListAsyncThunks';
import { taxRatesListSliceModel } from 'src/app/models/settingsModels/taxModels/taxRatesListModel';

export const taxRatesListReducer = (builder: ActionReducerMapBuilder<taxRatesListSliceModel>) => {
	builder
		.addCase(getTaxRatesList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxRatesList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesList = payload.data; // []
			// state.taxRatesList = payload.meta.links;
		})
		.addCase(getTaxRatesList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
