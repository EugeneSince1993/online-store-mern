"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_number_format_1 = __importDefault(require("react-number-format"));
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const ProductBlock_module_scss_1 = __importDefault(require("./ProductBlock.module.scss"));
const hooks_1 = require("../../redux/hooks");
const asyncActions_1 = require("../../redux/product/asyncActions");
const ButtonWithIcon_1 = require("../ButtonWithIcon");
const ProductBlock = (_a) => {
    var { _id, name, price, imageUrl, productCode, rating, testimonials, getProducts } = _a, otherProps = __rest(_a, ["_id", "name", "price", "imageUrl", "productCode", "rating", "testimonials", "getProducts"]);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickRemove = () => __awaiter(void 0, void 0, void 0, function* () {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            const data = yield dispatch((0, asyncActions_1.deleteProductById)(_id));
            if (!data.payload) {
                alert('Не получилось удалить товар');
            }
            else {
                alert('Товар удален');
                getProducts();
            }
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.productItem }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${_id}`, className: ProductBlock_module_scss_1.default.thumbnail }, { children: (0, jsx_runtime_1.jsx)("img", { src: imageUrl }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.dataContainer }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.productInfo }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: `/products/${_id}`, className: ProductBlock_module_scss_1.default.productName }, { children: name })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.productCode }, { children: ["\u041A\u043E\u0434 \u0442\u043E\u0432\u0430\u0440\u0430: ", productCode] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.icons }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ProductBlock_module_scss_1.default.rating, "tooltip", ProductBlock_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-star" }), (0, jsx_runtime_1.jsx)("span", { children: rating })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(ProductBlock_module_scss_1.default.testimonials, "tooltip", ProductBlock_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-comment" }), (0, jsx_runtime_1.jsx)("span", { children: testimonials })] }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: ProductBlock_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductBlock_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: price, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductBlock_module_scss_1.default.currency }, { children: "\u20BD" }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: ProductBlock_module_scss_1.default.changeProduct }, { children: (0, jsx_runtime_1.jsx)(ButtonWithIcon_1.ButtonWithIcon, Object.assign({ link: `/update-product/${_id}`, faClass: "fa-solid fa-gear" }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C" })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(ProductBlock_module_scss_1.default.deleteProduct, "tooltip", ProductBlock_module_scss_1.default.tooltip) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ onClick: onClickRemove }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-trash" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", ProductBlock_module_scss_1.default.tooltipText) }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }))] })) }))] }))] })));
};
exports.ProductBlock = ProductBlock;
//# sourceMappingURL=index.js.map