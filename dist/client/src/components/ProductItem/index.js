"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const react_number_format_1 = __importDefault(require("react-number-format"));
const ProductItem_module_scss_1 = __importDefault(require("./ProductItem.module.scss"));
const hooks_1 = require("../../redux/hooks");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../redux/cart/selectors");
const ProductItem = ({ phoneImage, rating, testimonials, productName, priceValue, productId, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const cartItem = (0, react_redux_1.useSelector)((0, selectors_1.selectCartItemById)(productId));
    const onClickAddToCart = () => {
        const item = {
            _id: productId,
            name: productName,
            price: priceValue,
            imageUrl: phoneImage,
            productCode: productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    const onClickAddToFavorites = () => {
        const item = {
            _id: productId,
            name: productName,
            price: priceValue,
            imageUrl: phoneImage,
            productCode,
            count: 0,
        };
        dispatch((0, favoriteSlice_1.addFavoriteItem)(item));
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductItem_module_scss_1.default.productItem }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductItem_module_scss_1.default.productItemInner }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${productId}`, className: ProductItem_module_scss_1.default.image }, { children: (0, jsx_runtime_1.jsx)("img", { src: phoneImage }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductItem_module_scss_1.default.icons }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ProductItem_module_scss_1.default.rating, "tooltip", ProductItem_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-star" }), (0, jsx_runtime_1.jsx)("span", { children: rating }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText) }, { children: ["\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ", rating, " \u0438\u0437 5"] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ProductItem_module_scss_1.default.testimonials, "tooltip", ProductItem_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-comment" }), (0, jsx_runtime_1.jsx)("span", { children: testimonials }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText) }, { children: [testimonials, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ProductItem_module_scss_1.default.favorites, "tooltip", ProductItem_module_scss_1.default.tooltip), onClick: onClickAddToFavorites }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-heart" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText) }, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" }))] }))] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${productId}`, className: ProductItem_module_scss_1.default.productLink }, { children: productName })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductItem_module_scss_1.default.buyContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductItem_module_scss_1.default.buy }, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${productId}`, className: ProductItem_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductItem_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: priceValue, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductItem_module_scss_1.default.currency }, { children: "\u20BD" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductItem_module_scss_1.default.addToCart }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "tooltip", onClick: onClickAddToCart }, { children: cartItem ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductItem_module_scss_1.default.iconContainer }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-check" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tooltipText" }, { children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }))] }))) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductItem_module_scss_1.default.iconContainer }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tooltipText" }, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }))] }))) })) }))] })) }))] })) })));
};
exports.ProductItem = ProductItem;
//# sourceMappingURL=index.js.map