import { IProduct } from './../../types/IProduct';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';

interface ProductState {
  products: IProduct[],
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, 
      (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.error = '';
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, 
      (state, action: any) => {
      state.isLoading = false;
      state.error = action.payload;
      state.products = [];
    });
  }
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
