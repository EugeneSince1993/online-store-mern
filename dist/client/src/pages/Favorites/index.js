"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../redux/hooks");
const react_redux_1 = require("react-redux");
const components_1 = require("../../components");
const FavoritesEmpty_1 = require("../FavoritesEmpty");
const selectors_1 = require("../../redux/favorites/selectors");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const Favorites_module_scss_1 = __importDefault(require("./Favorites.module.scss"));
const Favorites = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { items } = (0, react_redux_1.useSelector)(selectors_1.selectFavorites);
    const onClickClear = () => {
        if (window.confirm('Очистить избранное?')) {
            dispatch((0, favoriteSlice_1.clearFavoriteItems)());
        }
    };
    if (!items.length) {
        return (0, jsx_runtime_1.jsx)(FavoritesEmpty_1.FavoritesEmpty, {});
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Favorites_module_scss_1.default.favoritesBlock }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Favorites_module_scss_1.default.favoritesContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Favorites_module_scss_1.default.productList }, { children: items.map((item) => ((0, jsx_runtime_1.jsx)(components_1.FavoriteItem, Object.assign({}, item), item._id))) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Favorites_module_scss_1.default.summary }, { children: (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ display: "block", variant: "outlined", onClickFunc: onClickClear }, { children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" })) }))] }))] })));
};
exports.Favorites = Favorites;
//# sourceMappingURL=index.js.map