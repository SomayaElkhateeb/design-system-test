// import { toast } from "react-toastify";
// import { getDiscounts, addDiscount } from "./marketingAsyncThunks";
import { getDiscounts } from './marketingAsyncThunks';

// get discounts
export const getDiscountsReducer = (builder) => {
	builder
		.addCase(getDiscounts.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase(getDiscounts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.discounts = action.payload;
		})
		.addCase(getDiscounts.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
};

// add discount
// export const addDiscountReducer = (builder) => {
//   builder
//     .addCase(addDiscount.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     })
//     .addCase(addDiscount.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.discounts.push(action.payload);
//       toast.success("Dicount added successfully");
//     })
//     .addCase(addDiscount.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       toast.error("Failed to add product");
//     });
// };
