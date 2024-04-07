import { configureStore } from '@reduxjs/toolkit';
import coupons from './slices/marketing/marketingSlice';
export default configureStore({
	reducer: {
		coupons,
	},
});
