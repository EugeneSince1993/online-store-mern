"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = ({ display = "inline-block", variant = "solid", link = "", justifyContentCenter = false, onClickFunc, children }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [display === "block" && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)({
                    [Button_module_scss_1.default.buttonContainer]: true,
                    [Button_module_scss_1.default.justifyContentCenter]: justifyContentCenter,
                }) }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: link, className: (0, classnames_1.default)({
                        [Button_module_scss_1.default.button]: true,
                        [Button_module_scss_1.default.outlined]: variant === "outlined",
                        [Button_module_scss_1.default.solid]: variant === "solid",
                        [Button_module_scss_1.default.db]: true,
                    }), onClick: onClickFunc }, { children: children })) }))), display === "inline-block" && ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: link, className: (0, classnames_1.default)({
                    [Button_module_scss_1.default.button]: true,
                    [Button_module_scss_1.default.outlined]: variant === "outlined",
                    [Button_module_scss_1.default.solid]: variant === "solid",
                    [Button_module_scss_1.default.dib]: true,
                }), onClick: onClickFunc }, { children: children })))] }));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map