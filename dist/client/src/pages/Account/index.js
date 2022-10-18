"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const selectors_1 = require("../../redux/auth/selectors");
const hooks_1 = require("../../redux/hooks");
const Account_module_scss_1 = __importDefault(require("./Account.module.scss"));
const Account = () => {
    const { data } = (0, hooks_1.useAppSelector)(selectors_1.selectAuth);
    const isAuth = (0, hooks_1.useAppSelector)(selectors_1.selectIsAuth);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Account_module_scss_1.default.account }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442" }), (0, jsx_runtime_1.jsx)("div", { children: data && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.userName }, { children: data.fullName })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.userEmail }, { children: data.email }))] })) })] })));
};
exports.Account = Account;
//# sourceMappingURL=index.js.map