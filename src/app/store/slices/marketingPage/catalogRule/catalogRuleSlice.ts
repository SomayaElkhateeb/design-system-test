import { createSlice } from '@reduxjs/toolkit';
import { catalogRulesReducer } from '../cartRule/cartRuleExtraReducer';


const initialState: any = {
	catalogRules: [],
	catalogRuleShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const catalogSlice = createSlice({
	name: 'catalogRules',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		catalogRulesReducer(builder);
	},
});

export default catalogSlice.reducer;
