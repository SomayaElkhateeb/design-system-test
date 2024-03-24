import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDiscounts = createAsyncThunk(
  "discount/getDiscounts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:3007/discount");
      const data = await response.json();
      return data;
    } catch (error) {
      // console.error("Error fetching discounts:", error);
      throw rejectWithValue(error.message);
    }
  }
);

export const insertDiscount = createAsyncThunk(
  "discount/insertDiscount",
  async (discountData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await fetch("http://localhost:3007/discount", {
        method: "POST",
        body: JSON.stringify(discountData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      // console.error("Error fetching discounts:", error);
      throw rejectWithValue(error.message);
    }
  }
);

const discountSlice = createSlice({
  name: "discount",
  reducers: {},
  initialState: { discounts: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      // get discounts
      .addCase(getDiscounts.pending, (state, action) => {
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
      })

      // insert discount
      .addCase(insertDiscount.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(insertDiscount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.discounts.push(action.payload);
      })
      .addCase(insertDiscount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default discountSlice.reducer;
