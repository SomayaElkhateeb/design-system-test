import { createSlice } from '@reduxjs/toolkit';
import { attributesReducer } from './attributeExtraReducers';
import { attributesSliceModel } from 'src/app/models/attributeSliceModel';
import { initialAttribute } from 'src/app/interface/AttributeInterface';


const initialState: attributesSliceModel = {
	attributesList: [],
	attributeShow: initialAttribute(),
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const attributesSlice = createSlice({
	name: 'attributesProducts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		attributesReducer(builder);
	},
});

export default attributesSlice.reducer;
