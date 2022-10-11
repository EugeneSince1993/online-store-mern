export interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
  productCode?: number;
}

export interface FavoriteSliceState {
  items: FavoriteItem[];
}
