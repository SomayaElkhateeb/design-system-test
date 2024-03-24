import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/app/services/httpServices";

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await api.get("/products");
    return response.data;
  }
);

// Add a new product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProduct, { thunkAPI }) => {
    // const currentState = thunkAPI.getState()
    // const headers = {
    //   Authorization: `Bearer ${currentState.user.token}`,
    // }
    try {
      const response = await api.post("/products", newProduct);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Update a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProduct, { thunkAPI }) => {
    try {
      const response = await api.put(
        `/products/${updatedProduct.id}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Delete a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { thunkAPI }) => {
    try {
      await api.delete(`/products/${productId}`);
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
