import { createSlice } from '@reduxjs/toolkit';
import { catalogRulesReducer } from './cartRuleExtraReducer';


const initialState: any = {
	cartRules: [],
	cartRuleShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const cartRuleSlice = createSlice({
	name: 'cartRule',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		catalogRulesReducer(builder);
	},
});

export default cartRuleSlice.reducer;
