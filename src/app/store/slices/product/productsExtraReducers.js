import { toast } from 'react-toastify'
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from './productsAsyncThunks'

// fetchProducts
export const fetchProductsReducer = (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
}

// addProduct
export const addProductReducer = (builder) => {
  builder
    .addCase(addProduct.fulfilled, (state, action) => {
      state.data.push(action.payload)
      toast.success('Product added successfully')
    })
    .addCase(addProduct.rejected, (state, action) => {
      state.error = action.payload
      toast.error('Failed to add product')
    })
}
// updateProduct
export const updateProductReducer = (builder) => {
  builder
    .addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.data.findIndex(
        (product) => product.id === action.payload.id,
      )
      if (index !== -1) {
        state.data[index] = action.payload
      }
      toast.success('Product updated successfully')
    })
    .addCase(updateProduct.rejected, (state, action) => {
      state.error = action.payload
      toast.error('Failed to updated product')
    })
}
// deleteProduct
export const deleteProductReducer = (builder) => {
  builder
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.data = state.data.filter((product) => product.id !== action.payload)
      toast.success('Product deleted successfully')
    })
    .addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.payload
      toast.error('Failed to delete product')
    })
}
