"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = exports.authRoutes = void 0;
const consts_1 = require("./utils/routes/consts");
const pages_1 = require("./pages");
exports.authRoutes = [
    {
        path: consts_1.ACCOUNT,
        Component: pages_1.Account,
    }
];
exports.publicRoutes = [
    {
        path: consts_1.HOME,
        Component: pages_1.Home,
    },
    {
        path: consts_1.PRODUCTS + '/:id',
        Component: pages_1.Product,
    },
    {
        path: consts_1.CART,
        Component: pages_1.Cart,
    },
    {
        path: consts_1.EMPTY_CART,
        Component: pages_1.CartEmpty,
    },
    {
        path: consts_1.FAVORITES,
        Component: pages_1.Favorites,
    },
    {
        path: consts_1.EMPTY_FAVORITES,
        Component: pages_1.FavoritesEmpty,
    },
];
//# sourceMappingURL=routes.js.map