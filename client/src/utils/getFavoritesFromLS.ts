import { FavoriteItem } from '../redux/favorites/types';

export const getFavoritesFromLS = () => {
  const data = localStorage.getItem('favorites');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as FavoriteItem[],
  };
};