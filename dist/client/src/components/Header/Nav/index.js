"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const Nav_module_scss_1 = __importDefault(require("./Nav.module.scss"));
const Nav = ({ cartTotal, favoritesTotal }) => {
    const [visibility, setVisibility] = (0, react_1.useState)(false);
    const popupCloseHandler = (isOpened) => {
        setVisibility(isOpened);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.nav }, { children: (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/cart" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.cartLink) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }), (0, jsx_runtime_1.jsx)("div", { children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" })] })), cartTotal > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.totalCount }, { children: (0, jsx_runtime_1.jsx)("div", { children: cartTotal }) })))] })) })) })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/favorites" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.favoritesLink) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-heart" }), (0, jsx_runtime_1.jsx)("div", { children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" })] })), favoritesTotal > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.totalCount }, { children: (0, jsx_runtime_1.jsx)("div", { children: favoritesTotal }) })))] })) })) })) })] }) }) })));
};
exports.Nav = Nav;
//# sourceMappingURL=index.js.map