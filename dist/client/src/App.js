"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const pages_1 = require("./pages");
function App() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Header, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "app-container app-content" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(pages_1.Home, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/products/:id", element: (0, jsx_runtime_1.jsx)(pages_1.Product, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(pages_1.Cart, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/empty-cart", element: (0, jsx_runtime_1.jsx)(pages_1.CartEmpty, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/favorites", element: (0, jsx_runtime_1.jsx)(pages_1.Favorites, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/empty-favorites", element: (0, jsx_runtime_1.jsx)(pages_1.FavoritesEmpty, {}) })] }) })), (0, jsx_runtime_1.jsx)(components_1.Footer, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map