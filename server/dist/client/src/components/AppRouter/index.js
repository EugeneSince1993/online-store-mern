"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const selectors_1 = require("../../redux/auth/selectors");
const hooks_1 = require("../../redux/hooks");
const routes_1 = require("../../routes");
const consts_1 = require("../../utils/routes/consts");
const AppRouter = () => {
    const isAuth = (0, hooks_1.useAppSelector)(selectors_1.selectIsAuth);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [routes_1.publicRoutes.map(({ path, Component }) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: path, element: (0, jsx_runtime_1.jsx)(Component, {}) }, path))), isAuth && (routes_1.authRoutes.map(({ path, Component }) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: path, element: (0, jsx_runtime_1.jsx)(Component, {}) }, path)))), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: consts_1.HOME, replace: true }) })] }));
};
exports.AppRouter = AppRouter;
//# sourceMappingURL=index.js.map