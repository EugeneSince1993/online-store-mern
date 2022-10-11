import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFavoritesFromLS } from '../../utils/getFavoritesFromLS';
import { FavoriteItem, FavoriteSliceState } from './types';

const initialState: FavoriteSliceState = getFavoritesFromLS();

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<FavoriteItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (!findItem) {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeFavoriteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => {
        return obj.id !== action.payload;
      });
    },
    clearFavoriteItems(state) {
      state.items = [];
    },
  }
});

export const { addFavoriteItem, removeFavoriteItem, clearFavoriteItems } = favoriteSlice.actions;

export default favoriteSlice.reducer;
