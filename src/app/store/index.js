import { configureStore } from '@reduxjs/toolkit';
import discounts from './slices/marketing/marketingSlice';
export default configureStore({
	reducer: {
		discounts,
	},
});
