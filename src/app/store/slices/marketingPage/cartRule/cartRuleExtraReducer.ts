import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCatalogRules, getCatalogRuleShow, postCatalogRule, putCatalogRule } from '../catalogRule/catalogRuleAsyncThunks';

export const catalogRulesReducer = (
	builder: ActionReducerMapBuilder<any>,
) => {
	builder
		// // get cart rule 
		.addCase(getCatalogRules.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCatalogRules.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.catalogRules = payload.data;
		})
		.addCase(getCatalogRules.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// // get cart rule Show
		.addCase(getCatalogRuleShow.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCatalogRuleShow.fulfilled, (state, { payload }: any) => {
			state.isLoading = false;
			state.catalogRuleShow = payload?.data;
		})
		.addCase(getCatalogRuleShow.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})

		//  
		.addCase(postCatalogRule.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(postCatalogRule.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(postCatalogRule.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})

		//  
		.addCase(putCatalogRule.pending, (state) => {
			state.isLoadingAddOrUpdate = true;
		})
		.addCase(putCatalogRule.fulfilled, (state, { payload }: any) => {
			state.isLoadingAddOrUpdate = false;
		})
		.addCase(putCatalogRule.rejected, (state, action) => {
			state.isLoadingAddOrUpdate = false;
		})



};
