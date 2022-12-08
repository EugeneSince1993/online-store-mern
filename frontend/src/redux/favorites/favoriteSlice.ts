import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLS } from '../../utils/getFavoritesFromLS';
import { IFavoriteItem, IFavoriteSliceState } from './types';

const initialState: IFavoriteSliceState = getFavoritesFromLS();

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<IFavoriteItem>) {
      const findItem = state.items.find((obj) => obj._id === action.payload._id);

      if (!findItem) {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeFavoriteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => {
        return obj._id !== action.payload;
      });
    },
    clearFavoriteItems(state) {
      state.items = [];
    },
  }
});

export const { addFavoriteItem, removeFavoriteItem, clearFavoriteItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
