import { RootState } from '../store';
import { IFavoriteItem } from './types';

export const selectFavorites = (state: RootState) => state.favorites;

export const selectFavoriteItemById = (id: string) => (state: RootState) => {
  return state.favorites.items.find((obj: IFavoriteItem) => obj._id === id);
};
