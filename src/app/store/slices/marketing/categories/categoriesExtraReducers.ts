import { getSelectCategories, postSelectCategories } from './categoriesAsyncThunks';

export const getCategoriesReducer = (builder) => {
	builder
		// get selectCategories
		.addCase(getSelectCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getSelectCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categories = action.payload;
		})
		.addCase(getSelectCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// post selectCategories
		.addCase(postSelectCategories.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(postSelectCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.categories.push(action.payload);
		})
		.addCase(postSelectCategories.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};