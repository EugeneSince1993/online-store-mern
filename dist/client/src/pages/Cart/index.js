"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const hooks_1 = require("../../redux/hooks");
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../redux/cart/selectors");
const react_number_format_1 = __importDefault(require("react-number-format"));
const classnames_1 = __importDefault(require("classnames"));
const cartSlice_1 = require("../../redux/cart/cartSlice");
const components_1 = require("../../components");
const Cart_module_scss_1 = __importDefault(require("./Cart.module.scss"));
const CartEmpty_1 = require("../CartEmpty");
const Cart = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { totalPrice, items } = (0, react_redux_1.useSelector)(selectors_1.selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch((0, cartSlice_1.clearItems)());
        }
    };
    if (!totalPrice) {
        return (0, jsx_runtime_1.jsx)(CartEmpty_1.CartEmpty, {});
    }
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.cartBlock }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.cartContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.productList }, { children: items.map((item) => ((0, jsx_runtime_1.jsx)(components_1.CartItem, Object.assign({}, item), item._id))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.summary }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.summaryContainer }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u0418\u0442\u043E\u0433\u043E" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.summaryBlocks }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.productQuantity }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.quantityKey }, { children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.quantityValue }, { children: totalCount }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Cart_module_scss_1.default.total }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.totalKey }, { children: "\u0421\u0443\u043C\u043C\u0430" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Cart_module_scss_1.default.price, Cart_module_scss_1.default.totalValue) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: totalPrice, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Cart_module_scss_1.default.currency }, { children: "\u20BD" }))] }))] }))] }))] })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ display: "block", variant: "solid" }, { children: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ display: "block", variant: "outlined", onClickFunc: onClickClear }, { children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }))] }))] }))] })));
};
exports.Cart = Cart;
//# sourceMappingURL=index.js.map