import { createSlice } from '@reduxjs/toolkit';
import { taxRatesListSliceModel } from 'src/app/models/settingsModels/taxModels/taxRatesListModel';
import { taxRatesListReducer } from './taxRatesListExtraReducer';

const initialState: taxRatesListSliceModel = {
	taxRatesList: [],
	isLoading: false,
	error: null,
};

const taxRatesListSlice = createSlice({
	name: 'taxRatesList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxRatesListReducer(builder);
	},
});

export default taxRatesListSlice.reducer;
