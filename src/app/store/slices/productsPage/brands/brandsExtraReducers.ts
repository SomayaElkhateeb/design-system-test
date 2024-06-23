import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getBrandsTable } from './brandsAsyncThunks';
import { brandsSliceModel } from 'src/app/models/brandsSliceModel';

export const getBrandsReducer = (builder: ActionReducerMapBuilder<brandsSliceModel>) => {
	builder
		// get brands table
		.addCase(getBrandsTable.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getBrandsTable.fulfilled, (state, action) => {
			state.isLoading = false;
			state.brands = action.payload;
		})
		.addCase(getBrandsTable.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
