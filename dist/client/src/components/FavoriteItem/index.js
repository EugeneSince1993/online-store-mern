"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_number_format_1 = __importDefault(require("react-number-format"));
const hooks_1 = require("../../redux/hooks");
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const FavoriteItem_module_scss_1 = __importDefault(require("./FavoriteItem.module.scss"));
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const cartSlice_1 = require("../../redux/cart/cartSlice");
;
const FavoriteItem = ({ id, name, price, imageUrl, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            dispatch((0, favoriteSlice_1.removeFavoriteItem)(id));
        }
    };
    const onClickAddToCart = () => {
        const item = {
            id: id,
            name: name,
            price: price,
            imageUrl: imageUrl,
            productCode: productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.productItem }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${id}`, className: FavoriteItem_module_scss_1.default.thumbnail }, { children: (0, jsx_runtime_1.jsx)("img", { src: imageUrl }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.dataContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.productInfo }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${id}`, className: FavoriteItem_module_scss_1.default.productName }, { children: name })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: price, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.currency }, { children: "\u20BD" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: FavoriteItem_module_scss_1.default.addToCart }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClickAddToCart }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: FavoriteItem_module_scss_1.default.cartIcon }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: FavoriteItem_module_scss_1.default.toCart }, { children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }))] }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(FavoriteItem_module_scss_1.default.deleteProduct, "tooltip", FavoriteItem_module_scss_1.default.tooltip) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ onClick: onClickRemove }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-trash" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", FavoriteItem_module_scss_1.default.tooltipText) }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }))] })) }))] }))] })));
};
exports.FavoriteItem = FavoriteItem;
//# sourceMappingURL=index.js.map