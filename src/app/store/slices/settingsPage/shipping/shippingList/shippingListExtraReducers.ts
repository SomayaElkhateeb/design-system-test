import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getShippingList } from './shippingListAsyncThunks';
import { shippingListSliceModel } from 'src/app/models/settingsModels/shippingModels/shippingListModel';

export const shippingListReducer = (builder: ActionReducerMapBuilder<shippingListSliceModel>) => {
	builder
		// get shipping list
		.addCase(getShippingList.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getShippingList.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.shippingList = payload.data;
		})
		.addCase(getShippingList.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};
