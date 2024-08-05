import { createSlice } from '@reduxjs/toolkit';
import { branchesReducer } from './branchesExtraReducers';


const initialState: any = {
	rolesList: [],
	rolesShow: null,

	isLoadingDelete: false,
	isLoading: false,
	error: null,
};

const branchesSlice = createSlice({
	name: 'branchSettings',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		branchesReducer(builder);
	},
});

export default branchesSlice.reducer;
