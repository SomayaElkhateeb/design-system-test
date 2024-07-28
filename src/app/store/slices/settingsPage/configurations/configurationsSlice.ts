import { createSlice } from '@reduxjs/toolkit';
import { configurationsReducer } from './configurationsExtraReducer';


const initialState: any = {
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const configurationsSlice = createSlice({
	name: 'configurations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		configurationsReducer(builder);
	},
});

export default configurationsSlice.reducer;
