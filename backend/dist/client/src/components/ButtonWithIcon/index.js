"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const ButtonWithIcon = ({ display = "inline-block", variant = "solid", link = "", justifyContentCenter = false, onClickFunc, faClass = "fa-solid fa-gear", children }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [display === "block" && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("button-container", {
                    "button-container_jcc": justifyContentCenter,
                }) }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, Object.assign({ to: link, className: (0, classnames_1.default)("button", "button_db", {
                        "button_outlined": variant === "outlined",
                        "button_solid": variant === "solid",
                    }), onClick: onClickFunc }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("button__icon", {
                                "button__icon_solid": variant === "solid",
                            }) }, { children: (0, jsx_runtime_1.jsx)("i", { className: faClass }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("button__text", {
                                "button__text_solid": variant === "solid",
                            }) }, { children: children }))] })) }))), display === "inline-block" && ((0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, Object.assign({ to: link, className: (0, classnames_1.default)("button", "button_dib", {
                    "button_outlined": variant === "outlined",
                    "button_solid": variant === "solid",
                }), onClick: onClickFunc }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("button__icon", {
                            "button__icon_solid": variant === "solid",
                        }) }, { children: (0, jsx_runtime_1.jsx)("i", { className: faClass }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)("button__text", {
                            "button__text_solid": variant === "solid",
                        }) }, { children: children }))] })))] }));
};
exports.ButtonWithIcon = ButtonWithIcon;
//# sourceMappingURL=index.js.map