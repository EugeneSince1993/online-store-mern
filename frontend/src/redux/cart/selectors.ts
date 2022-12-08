import { RootState } from '../store';
import { ICartItem } from './types';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) => {
  return state.cart.items.find((obj: ICartItem) => obj._id === id);
};
