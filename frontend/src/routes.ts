import { ACCOUNT, CART, CREATE_PRODUCT, EMPTY_CART, EMPTY_FAVORITES, FAVORITES, HOME, PRODUCTS, UPDATE_PRODUCT } from './utils/routes/consts';
import { Account, Cart, CartEmpty, CreateProduct, Favorites, FavoritesEmpty, Home, Product, UpdateProduct } from './pages';


export const authRoutes = [
  {
    path: ACCOUNT,
    Component: Account,
  },
  {
    path: CREATE_PRODUCT,
    Component: CreateProduct,
  },
  {
    path: UPDATE_PRODUCT + '/:id',
    Component: UpdateProduct,
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
