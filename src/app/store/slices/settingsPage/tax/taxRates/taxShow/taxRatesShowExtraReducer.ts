import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getTaxRatesShow } from './taxRatesShowAsyncThunks';
import { taxRatesShowSliceModel } from 'src/app/models/settingsModels/taxModels/taxRatesShowModel';

export const taxRatesShowReducer = (builder: ActionReducerMapBuilder<taxRatesShowSliceModel>) => {
	builder
		.addCase(getTaxRatesShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getTaxRatesShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.taxRatesShow = payload.data;
		})
		.addCase(getTaxRatesShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
