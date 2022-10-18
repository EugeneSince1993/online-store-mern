import { ACCOUNT, CART, EMPTY_CART, EMPTY_FAVORITES, FAVORITES, HOME, PRODUCTS } from './utils/routes/consts';
import { Account, Cart, CartEmpty, Favorites, FavoritesEmpty, Home, Product } from './pages';


export const authRoutes = [
  {
    path: ACCOUNT,
    Component: Account,
  }
];

export const publicRoutes = [
  {
    path: HOME,
    Component: Home,
  },
  {
    path: PRODUCTS + '/:id',
    Component: Product,
  },
  {
    path: CART,
    Component: Cart,
  },
  {
    path: EMPTY_CART,
    Component: CartEmpty,
  },
  {
    path: FAVORITES,
    Component: Favorites,
  },
  {
    path: EMPTY_FAVORITES,
    Component: FavoritesEmpty,
  },
];
