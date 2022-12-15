export interface ICartItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
  productCode: number;
}

export interface ICartSliceState {
  totalPrice: number;
  items: ICartItem[];
}
