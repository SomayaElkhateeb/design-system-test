import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { getCoupons, postCoupons, updateCoupon, deleteCoupons } from './couponsAsyncThunks';
import { couponsSliceModel } from 'src/app/models/couponsSliceModel';

export const getCouponsReducer = (builder: ActionReducerMapBuilder<couponsSliceModel>) => {
	builder
		// get coupons
		.addCase(getCoupons.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getCoupons.fulfilled, (state, action) => {
			state.isLoading = false;
			state.coupons = action.payload;
		})
		.addCase(getCoupons.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		})
		// post coupons
		.addCase(postCoupons.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(postCoupons.fulfilled, (state, action) => {
			state.isLoading = false;
			if (Array.isArray(state.coupons)) {
				state.coupons.push(action.payload);
			} else {
				state.coupons = [action.payload];
			}
		})
		.addCase(postCoupons.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	// update coupon
	// .addCase(updateCoupon.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(updateCoupon.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	state.coupons = state.coupons.map((coupon) => {
	// 		if (coupon.id === action.payload.id) {
	// 			return action.payload;
	// 		}
	// 		return coupon;
	// 	});
	// })
	// .addCase(updateCoupon.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// })
	// // delete coupon
	// .addCase(deleteCoupons.pending, (state) => {
	// 	state.isLoading = true;
	// 	state.error = null;
	// })
	// .addCase(deleteCoupons.fulfilled, (state, action) => {
	// 	state.isLoading = false;
	// 	state.coupons = state.coupons.filter((el) => el.id !== action.payload);
	// })
	// .addCase(deleteCoupons.rejected, (state, action) => {
	// 	state.isLoading = false;
	// 	state.error = action.payload;
	// });
};
