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
const Popup_1 = require("../../Popup");
const Forms_1 = require("../../Forms");
const Registration_1 = require("../../Forms/Registration");
const hooks_1 = require("../../../redux/hooks");
const selectors_1 = require("../../../redux/auth/selectors");
const authSlice_1 = require("../../../redux/auth/authSlice");
const Nav = ({ cartTotal, favoritesTotal }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const isAuth = (0, hooks_1.useAppSelector)(selectors_1.selectIsAuth);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [visibility, setVisibility] = (0, react_1.useState)(false);
    const [loginActive, setLoginActive] = (0, react_1.useState)(false);
    const [registerActive, setRegisterActive] = (0, react_1.useState)(false);
    const popupCloseHandler = (isOpened) => {
        setVisibility(isOpened);
    };
    const loginHandler = () => {
        setVisibility(true);
        setLoginActive(true);
        setRegisterActive(false);
    };
    const registerHandler = () => {
        setVisibility(true);
        setRegisterActive(true);
        setLoginActive(false);
    };
    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
            dispatch((0, authSlice_1.logout)());
            window.localStorage.removeItem('token');
            navigate('/');
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.nav }, { children: [(0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.cartListItem }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/cart" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.cartLink) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }), (0, jsx_runtime_1.jsx)("div", { children: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430" })] })), cartTotal > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.totalCount }, { children: (0, jsx_runtime_1.jsx)("div", { children: cartTotal }) })))] })) })) })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.favoritesListItem }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/favorites" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.favoritesLink) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-heart" }), (0, jsx_runtime_1.jsx)("div", { children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" })] })), favoritesTotal > 0 && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.totalCount }, { children: (0, jsx_runtime_1.jsx)("div", { children: favoritesTotal }) })))] })) })) })) })), isAuth ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.accountListItem }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/account" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.account) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-circle-user" }), (0, jsx_runtime_1.jsx)("div", { children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442" })] })) })) })) })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.logoutListItem }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ onClick: onClickLogout }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.logout) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-right-from-bracket" }), (0, jsx_runtime_1.jsx)("div", { children: "\u0412\u044B\u0439\u0442\u0438" })] })) })) })) })) }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.loginListItem }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ onClick: loginHandler }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.login) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-right-to-bracket" }), (0, jsx_runtime_1.jsx)("div", { children: "\u0412\u043E\u0439\u0442\u0438" })] })) })) })) })) })), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: Nav_module_scss_1.default.registrationListItem }, { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ onClick: registerHandler }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.register) }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Nav_module_scss_1.default.linkGroup }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Nav_module_scss_1.default.linkInnerText }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-regular fa-address-card" }), (0, jsx_runtime_1.jsx)("div", { children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })] })) })) })) })) }))] }))] }) }), (0, jsx_runtime_1.jsx)(Popup_1.Popup, Object.assign({ onClose: popupCloseHandler, toShow: visibility, title: loginActive ? "Авторизация" : "Регистрация" }, { children: loginActive ? (0, jsx_runtime_1.jsx)(Forms_1.Login, { onClose: popupCloseHandler })
                    : (0, jsx_runtime_1.jsx)(Registration_1.Registration, { onClose: popupCloseHandler }) }))] })));
};
exports.Nav = Nav;
//# sourceMappingURL=index.js.map