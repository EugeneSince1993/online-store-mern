"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_number_format_1 = __importDefault(require("react-number-format"));
const hooks_1 = require("../../redux/hooks");
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const cartSlice_1 = require("../../redux/cart/cartSlice");
const CartItem_module_scss_1 = __importDefault(require("./CartItem.module.scss"));
const CartItem = ({ _id, name, price, imageUrl, count, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickAdd = () => {
        dispatch((0, cartSlice_1.addItem)({
            _id,
        }));
    };
    const onClickSubtract = () => {
        dispatch((0, cartSlice_1.subtractItem)(_id));
    };
    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            dispatch((0, cartSlice_1.removeItem)(_id));
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.productItem }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${_id}`, className: CartItem_module_scss_1.default.thumbnail }, { children: (0, jsx_runtime_1.jsx)("img", { src: imageUrl }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.dataContainer }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.productInfo }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${_id}`, className: CartItem_module_scss_1.default.productName }, { children: name })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.productCode }, { children: ["\u041A\u043E\u0434 \u0442\u043E\u0432\u0430\u0440\u0430: ", productCode] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: CartItem_module_scss_1.default.quantityContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.quantity }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ disabled: count === 1, onClick: onClickSubtract }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-minus" }) })), (0, jsx_runtime_1.jsx)("div", { children: count }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClickAdd }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-plus" }) }))] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CartItem_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: CartItem_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: price * count, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: CartItem_module_scss_1.default.currency }, { children: "\u20BD" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(CartItem_module_scss_1.default.deleteProduct, "tooltip", CartItem_module_scss_1.default.tooltip) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ onClick: onClickRemove }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-trash" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", CartItem_module_scss_1.default.tooltipText) }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }))] })) }))] }))] })));
};
exports.CartItem = CartItem;
//# sourceMappingURL=index.js.map