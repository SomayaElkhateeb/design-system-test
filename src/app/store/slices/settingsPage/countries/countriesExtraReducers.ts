import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { countriesSliceModel } from 'src/app/models/settingsModels/countriesSettingsModel';
import { getCountries } from './countriesAsyncThunks';


export const countriesReducer = (builder: ActionReducerMapBuilder<countriesSliceModel>) => {
	builder
		// get all countries
		.addCase(getCountries.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCountries.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.allCountries = payload.data; 
		})
		.addCase(getCountries.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		

};
