export interface IFavoriteItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
  productCode: number;
}

export interface IFavoriteSliceState {
  items: IFavoriteItem[];
}
