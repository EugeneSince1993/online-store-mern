"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("./components");
const asyncActions_1 = require("./redux/auth/asyncActions");
const hooks_1 = require("./redux/hooks");
function App() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, asyncActions_1.fetchAuthMe)());
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Header, {}), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "app-container app-content" }, { children: (0, jsx_runtime_1.jsx)(components_1.AppRouter, {}) })), (0, jsx_runtime_1.jsx)(components_1.Footer, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map