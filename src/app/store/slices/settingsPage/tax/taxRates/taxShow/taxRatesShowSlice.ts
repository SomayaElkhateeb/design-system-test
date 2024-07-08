import { createSlice } from '@reduxjs/toolkit';
import { taxRatesShowReducer } from './taxRatesShowExtraReducer';
import { taxRatesShowSliceModel } from 'src/app/models/settingsModels/taxModels/taxRatesShowModel';

const initialState: taxRatesShowSliceModel = {
	taxRatesShow: [],
	isLoading: false,
	error: null,
};

const taxRatesShowSlice = createSlice({
	name: 'taxRatesShow',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		taxRatesShowReducer(builder);
	},
});

export default taxRatesShowSlice.reducer;
